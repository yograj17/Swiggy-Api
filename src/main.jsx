import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MainDataFunction from "./utils/DataContext.jsx";
import { router } from "./utils/routesFile.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <MainDataFunction>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </MainDataFunction>
);
