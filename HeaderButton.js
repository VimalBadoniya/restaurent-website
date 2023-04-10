import React from "react";
import "./HeaderButton.css";
import { HiShoppingCart } from "react-icons/hi";

const HeaderButton = () => {
  return (
    <button onClick={()=>{console.log("cart clicked")}} >
      <span>
        <HiShoppingCart className="child-icon" />
      </span>
      <span className="child-text">Your Cart</span>
      <span className="counter">3</span>
    </button>
  );
};

export default HeaderButton;
