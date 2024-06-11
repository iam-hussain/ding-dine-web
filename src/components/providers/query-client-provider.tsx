import {
  QueryClient,
  QueryClientProvider as QClient,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export function QueryClientProvider({ children }: any) {
  return <QClient client={queryClient}>{children}</QClient>;
}
