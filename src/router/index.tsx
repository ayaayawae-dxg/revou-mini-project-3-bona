import { GeneralLayout } from "layouts";
import { Home, Result } from "pages";
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
        path: "result",
        element: <Result />,
      },
    ],
  },
]);

export default router;
