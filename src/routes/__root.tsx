import { createRootRoute, Outlet } from "@tanstack/react-router";
import React, { Suspense } from "react";

import { Toaster } from "@/components/atoms/sonner";
import { QueryClientProvider } from "@/components/providers/query-client-provider";
import StoreProvider from "@/components/providers/store-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

export const Route = createRootRoute({
  component: () => (
    <Suspense>
      <StoreProvider>
        <QueryClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Outlet />
            <TanStackRouterDevtools />
            <Toaster />
          </ThemeProvider>
        </QueryClientProvider>
      </StoreProvider>
    </Suspense>
  ),
});
