import Dashboard from "../../views/dashboard/Dashboard";
import Home from "../../views/dashboard/home/Home";

const dashboardRoutes = {
  path: "/dashboard",
  element: <Dashboard />,
  children: [
    {
      path: "/dashboard",
      element: <Home />,
    },
  ],
};

export default dashboardRoutes;
