import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import CardWrapper from "../CardWrapper/CardWrapper";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [{path: "/shop", element: <CardWrapper/>}]
    }
  ])
  return <RouterProvider router={router}></RouterProvider>
}

export default Router;