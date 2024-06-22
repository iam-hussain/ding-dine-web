import "./styles/global.scss";

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import { ThemeProvider } from "next-themes";
import { QueryClientProvider } from "@tanstack/react-query";
import StoreProvider from "./providers/store-provider";
import { queryClient } from "./providers/query-provider";

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <StoreProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <QueryClientProvider client={queryClient}>
            <Router />
          </QueryClientProvider>
        </ThemeProvider>
      </StoreProvider>
    </StrictMode>
  );
}
