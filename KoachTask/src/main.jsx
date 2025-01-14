import { createRoot } from "react-dom/client";

import "./index.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./Components/router/router.jsx";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
