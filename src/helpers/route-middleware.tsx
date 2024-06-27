import Error from "@/components/molecules/error";
import Loader from "@/components/molecules/loader";
import { categoriesQueryOptions, productsQueryOptions } from "./query-options";
import { setCategories, setProducts } from "@/store/baseSlice";

const common = {
  errorComponent: (error: any) => <Error error={error} />,
  pendingComponent: () => <Loader />,
};

const productCategory = {
  ...common,
  loader: async ({ context }: any) => {
    const queryClient = context.queryClient;
    const [categories, products] = await Promise.all([
      queryClient.ensureQueryData(categoriesQueryOptions()),
      queryClient.ensureQueryData(productsQueryOptions()),
    ]);

    if (products) {
      context.store.dispatch(setProducts(products));
    }

    if (categories) {
      context.store.dispatch(setCategories(categories));
    }
  },
};

const product = {
  ...common,
  loader: async ({ context }: any) => {
    const queryClient = context.queryClient;
    const products = await queryClient.ensureQueryData(productsQueryOptions());

    if (products) {
      context.store.dispatch(setProducts(products));
    }
  },
};

const category = {
  ...common,
  loader: async ({ context }: any) => {
    const queryClient = context.queryClient;
    const categories = await queryClient.ensureQueryData(
      categoriesQueryOptions()
    );

    if (categories) {
      context.store.dispatch(setCategories(categories));
    }
  },
};

export default {
  common,
  productCategory,
  product,
  category,
};
