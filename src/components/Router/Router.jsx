import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import CardWrapper from "../CardWrapper/CardWrapper";
import Cart from "../Cart/Cart";
import Fetcher from "../Fetcher/Fetcher";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [{path: "/shop", element: <><Fetcher/> <Cart/></>}]
    }
  ])
  return <RouterProvider router={router}></RouterProvider>
}

export default Router;