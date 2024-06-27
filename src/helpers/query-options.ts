import { queryOptions } from "@tanstack/react-query";
import fetcher from "@/lib/fetcher";

const noRefetchConfigs = {
  refetchOnMount: false,
  refetchOnReconnect: false,
  refetchOnWindowFocus: false,
};

export const meQueryOptions = () =>
  queryOptions({
    queryKey: ["me"],
    queryFn: () => fetcher("/authentication/me"),
    ...noRefetchConfigs,
  });

export const storeQueryOptions = () =>
  queryOptions({
    queryKey: ["store"],
    queryFn: () => fetcher("/store"),
    ...noRefetchConfigs,
  });

export const categoriesQueryOptions = () =>
  queryOptions({
    queryKey: ["categories"],
    queryFn: () => fetcher("/store/categories"),
    ...noRefetchConfigs,
  });

export const productsQueryOptions = () =>
  queryOptions({
    queryKey: ["products"],
    queryFn: () => fetcher("/store/products"),
    ...noRefetchConfigs,
  });

export const tokenQueryOptions = (enableKitchenCategory: boolean = false) =>
  queryOptions({
    queryKey: ["tokens"],
    queryFn: () =>
      fetcher(
        `/store/tokens?category=${enableKitchenCategory ? "true" : "false"}`
      ),
  });
