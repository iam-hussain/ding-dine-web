import "./styles/global.scss";

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import { QueryClientProvider } from "@/providers/query-provider";
import { ThemeProvider } from "next-themes";
import StoreProvider from "./providers/store-provider";

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
          <QueryClientProvider>
            <Router />
          </QueryClientProvider>
        </ThemeProvider>
      </StoreProvider>
    </StrictMode>
  );
}
