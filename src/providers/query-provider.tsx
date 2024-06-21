import {
  QueryClient,
  QueryClientProvider as QClient,
} from "@tanstack/react-query";
import React from "react";

export const queryClient = new QueryClient();

export function QueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <QClient client={queryClient}>{children}</QClient>;
}
