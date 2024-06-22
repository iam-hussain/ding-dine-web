import { queryOptions } from "@tanstack/react-query";
import fetcher from "./fetcher";

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
    queryFn: () => fetcher("/categories"),
    ...noRefetchConfigs,
  });

export const productsQueryOptions = () =>
  queryOptions({
    queryKey: ["products"],
    queryFn: () => fetcher("/products"),
    ...noRefetchConfigs,
  });
