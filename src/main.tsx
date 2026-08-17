import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";

import "./styles.css";
import { initAnalytics } from "@/lib/analytics";
import { getRouter } from "./router";

const router = getRouter();

const rootElement = document.getElementById("root")!;

initAnalytics();

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
