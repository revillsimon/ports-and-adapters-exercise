import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { CounterProvider } from "./context";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </StrictMode>
);
