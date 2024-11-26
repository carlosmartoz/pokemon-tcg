// CSS
import "./index.css";

// App
import App from "./App.tsx";

// React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Render
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
