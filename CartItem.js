import React from "react";
import "./CartItem.css"

const CartItem = (props) => {
    
  return (
    <div className="cart-container">
      <div className="div3">
        <div className="name">
          <h2 className="h2div" >{props.name}</h2>
        </div>
        <div className="div2">
            <h4>₹{props.price}</h4>
            <div className="quantity">x {props.quantity}</div>
        </div>
      </div>

      <div>
        <button className="btn" onClick={props.onRemove}>-</button>
        <button className="btn" onClick={props.onOneAdd}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
