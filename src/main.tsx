import "./styles/global.scss";

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import { QueryClientProvider } from "@/providers/query-provider";

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider>
        <Router />
      </QueryClientProvider>
    </StrictMode>
  );
}
