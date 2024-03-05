import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function App() {
  const [cartData, setCartData] = useState([]);
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
  const updateCart = (item, quantity) => {
    const itemToUpdate = cartData.find((cartItem)=> cartItem.id === item.id);
    if(itemToUpdate) {
      if (quantity > 0) {
        itemToUpdate.quantity = quantity;
        setCartData(cartData.map((cartItem) => {
          if (cartItem.id !== itemToUpdate.id) {
            return cartItem;
          } else {
            return {...itemToUpdate, quantity: quantity}
          }
        }))
      } else {
        console.log("HERE");
        setCartData(cartData.filter((cartItem) => cartItem.id !== itemToUpdate.id));
      }
    } else {
      setCartData([...cartData, {...item, quantity: quantity}]);
    }
    console.log(cartData);
  }
  const { pathname } = useLocation();
  
  const routeMap = {"/shop": "shop", "/": "home"};
  const activeLink = routeMap[pathname];
  return (
    <>
      <Navbar activeLink={activeLink} links={["home", "shop", "about us"]} itemCount={cartData.reduce((previous, current) => previous+current.quantity, 0)} />
      <Outlet context={{otherProps:{productData: productData, updateCart: updateCart}, cartData: cartData}}></Outlet>
    </>
  );
}

export default App;
