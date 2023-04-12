import React from "react";
import "./HeaderButton.css";
import { HiShoppingCart } from "react-icons/hi";



const HeaderButton = (props) => {
  
  
  const clickHandler = ()=>{
    props.onclick()

  }

  return (
    <button className="cart-button" onClick={clickHandler} >
      <span>
        <HiShoppingCart className="child-icon" />
      </span>
      <span className="child-text">Your Cart</span>
      <span className="counter">3</span>
    </button>
  );
};

export default HeaderButton;
