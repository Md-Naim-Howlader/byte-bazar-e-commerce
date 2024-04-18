import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Shop from "../pages/Shop";
import OrderReview from "../pages/OrderReview";
import OrderNow from "../components/OrderNow/OrderNow";
import About from "../pages/About";
import HelpSupport from "../pages/HelpSupport";
import NotFound from "../pages/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/orderReview",
        element: <OrderReview />,
      },
      {
        path: "/orderNow",
        element: <OrderNow />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/helpSupport",
        element: <HelpSupport />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
