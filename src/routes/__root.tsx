import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import React, { Suspense } from "react";

import { Toaster } from "@/components/atoms/sonner";
import { QueryClientProvider } from "@/providers/query-provider";
import StoreProvider from "@/providers/store-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { RouterContext } from "@/types/context";

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

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <Suspense>
      <StoreProvider>
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
      </StoreProvider>
    </Suspense>
  ),
});
