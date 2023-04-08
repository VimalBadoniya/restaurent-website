import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="heading-text">
        <h1 className="heading-text">React Meals</h1>
      </div>

      <div>
        <div>
          <HiShoppingCart />
          <h3>Your Cart</h3>
        </div>
        <div>
          <h4>0</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
