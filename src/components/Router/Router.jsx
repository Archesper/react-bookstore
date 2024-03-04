import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import CardWrapper from "../CardWrapper/CardWrapper";
import Cart from "../Cart/Cart";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [{path: "/shop", element: <><CardWrapper/> <Cart/></>}]
    }
  ])
  return <RouterProvider router={router}></RouterProvider>
}

export default Router;