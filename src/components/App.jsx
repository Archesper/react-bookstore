import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function App() {
  const [cartData, setCartData] = useState([]);
  const [modalActive, setModalActive] = useState(false);
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
      <Navbar onIconClick={()=> setModalActive(!modalActive)} activeLink={activeLink} links={["home", "shop", "about us"]} itemCount={cartData.reduce((previous, current) => previous+current.quantity, 0)} />
      <Outlet context={{updateCart: updateCart, cartData: cartData, isActive: modalActive}}></Outlet>
    </>
  );
}

export default App;
