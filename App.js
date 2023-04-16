import React, {  useState } from "react";
import Header from "./components/UI/Header";
import "./App.css";
import Cart from "./components/Cart/Cart";
import CartProvider from "./source/CartProvider";


function App() {

  const [isCart , setCart] = useState(false);
  const cartHandler = ()=>{
    setCart(true);
  }
  const closeHandler = ()=>{
    setCart(false)
  }
  return (
    <CartProvider>
      <Header onclick={cartHandler}/>
      {isCart && <Cart onclose={closeHandler}></Cart>}
    </CartProvider>
  );
}

export default App;
