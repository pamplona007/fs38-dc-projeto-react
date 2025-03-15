import { createBrowserRouter } from "react-router-dom";
import homeRoutes from "./store/home/home";
import dashboardRoutes from "./dashboard/dashboard-routes";
import Login from "../views/login/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  homeRoutes,
  dashboardRoutes,
]);

export default router;
