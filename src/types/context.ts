import { queryClient } from "@/providers/query-provider";
import { store } from "@/store";

export type RouterContext = {
  queryClient: typeof queryClient;
  store: typeof store;
};
