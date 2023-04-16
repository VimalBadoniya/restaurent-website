import React, { useContext } from "react";
import "./HeaderButton.css";
import { HiShoppingCart } from "react-icons/hi";
import CartContext from "../../source/cart-context";



const HeaderButton = (props) => {
  const ctx = useContext(CartContext)
  //console.log(ctx.quantity)
  
  const clickHandler = ()=>{
    props.onclick()

  }

  return (
    <button className="cart-button" onClick={clickHandler} >
      <span>
        <HiShoppingCart className="child-icon" />
      </span>
      <span className="child-text">Your Cart</span>
      <span className="counter">{ctx.quantity}</span>
    </button>
  );
};

export default HeaderButton;
