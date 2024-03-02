import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function App() {
  const [productData, setProductData] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/200/92c952",
      title: "Lorem Ipsum",
      description: "Lorem Ipsumly lorem ipsum",
      price: 70,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/200/92c952",
      title: "Lorem Ipsum",
      description: "Lorem Ipsumly lorem ipsum",
      price: 75,
    },
  ]);
  const { pathname } = useLocation();
  const isShopping = pathname === "/shop";
  return (
    <>
      <Navbar isShopping={isShopping} links={["Home", "Shop"]} />
      <Outlet context={productData}></Outlet>
    </>
  );
}

export default App;
