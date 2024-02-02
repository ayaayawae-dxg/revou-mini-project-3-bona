import { GeneralLayout } from "layouts";
import { Home, Dashboard } from "pages";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GeneralLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
