import React, { Fragment , useState } from "react";
import Header from "./components/UI/Header";
import "./App.css";
import Cart from "./components/Cart/Cart";


function App() {

  const [isCart , setCart] = useState(false);
  const cartHandler = ()=>{
    setCart(true);
  }
  const closeHandler = ()=>{
    setCart(false)
  }
  return (
    <Fragment>
      <Header onclick={cartHandler}/>
      {isCart && <Cart onclose={closeHandler}></Cart>}
    </Fragment>
  );
}

export default App;
