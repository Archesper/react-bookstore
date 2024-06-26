import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Cart from "../Cart/Cart";
import Modal from "../Modal/Modal";
import PostFetchRenderer from "../PostFetchRenderer/PostFetchRenderer";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/shop",
          element: (
            <>
              <PostFetchRenderer></PostFetchRenderer>{" "}
              <Modal backdropBlur={true}>
                <Cart />
              </Modal>
            </>
          ),
        },
        { path: "/aboutus" },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
