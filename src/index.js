import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { Authcontextprovider } from "./Context/AuthContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Authcontextprovider>
    <App />
  </Authcontextprovider>
);
