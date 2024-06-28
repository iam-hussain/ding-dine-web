import {
  meQueryOptions,
  storeQueryOptions,
  categoriesQueryOptions,
  tokenQueryOptions,
} from "@/helpers/query-options";
import {
  setCategories,
  setProducts,
  setStore,
  setTokens,
  setUser,
} from "@/store/baseSlice";

type loaderItems = "me" | "store" | "products" | "categories" | "tokens";

const queryMapper: { [key in loaderItems]: any } = {
  me: meQueryOptions,
  store: storeQueryOptions,
  products: storeQueryOptions,
  categories: categoriesQueryOptions,
  tokens: tokenQueryOptions,
};

const storeMapper: { [key in loaderItems]: any } = {
  me: setUser,
  store: setStore,
  products: setProducts,
  categories: setCategories,
  tokens: setTokens,
};

const routeLoader =
  (items: loaderItems[]) =>
  async ({ context }: any) => {
    const queryClient = context.queryClient;
    const fetchKeys = items.filter((item) => item !== "tokens");

    const fetched = await Promise.all(
      fetchKeys.map((e) => queryClient.ensureQueryData(queryMapper[e]()))
    );
    const itemsData = fetchKeys.reduce(
      (acc, key, index) => {
        acc[key] = fetched[index];
        storeMapper[key](fetched[index]);
        return acc;
      },
      {} as { [key in loaderItems]: any }
    );

    if (items.includes("tokens") && itemsData.store) {
      const enableKitchenCategory = Boolean(
        itemsData.store?.featureFlags?.enableKitchenCategory
      );
      await queryClient.ensureQueryData(
        tokenQueryOptions(enableKitchenCategory)
      );
    }
  };

export default routeLoader;
