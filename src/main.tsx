import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";

import { StoreProvider } from "@/providers/StoreProviders.tsx";
import { RouterProvider } from "@/providers/RouterProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <RouterProvider />
    </StoreProvider>
  </StrictMode>
);
