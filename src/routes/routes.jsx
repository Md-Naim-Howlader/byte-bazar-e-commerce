import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Shop from "../pages/Shop";
import OrderReview from "../pages/OrderReview";
import OrderNow from "../components/OrderNow/OrderNow";
import About from "../pages/About";
import HelpSupport from "../pages/HelpSupport";
import NotFound from "../pages/NotFound";
import LogIn from "../pages/auth/LogIn";
import PrivateRoute from "../components/Private_Route/Private_Route";
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
        element: (
          <PrivateRoute>
            <OrderNow />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/helpSupport",
        element: <HelpSupport />,
      },
      {
        path: "/logIn",
        element: <LogIn />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
