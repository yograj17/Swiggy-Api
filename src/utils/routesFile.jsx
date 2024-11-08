import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../Component/Pages/Cart";
import Home from "../Component/Pages/Home";
import SpecificRestrorantInfo from "../Component/SpecificRestorantInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:id",
        element: <SpecificRestrorantInfo />,
      },
    ],
  },
]);
