import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./Cart.css";
import Modal from "./Modal";
import CartContext from "../../source/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  //console.log(ctx)
  const totalAmount = ctx.totalAmount;
  const hasItems = ctx.items.length > 0;

  const closeHandler = () => {
    props.onclose();
  };
   
  const addHandler = (item)=>{
    ctx.addOneItem(item)
    
};

const removeHandler = (id)=>{
    ctx.removeItem(id)
};

  return ReactDOM.createPortal(
    <Modal onclose={props.onclose}>
      <ul className="list">
        {ctx.items.map((item) => {
          //console.log(item)
          return (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              onOneAdd = {addHandler.bind(null , item)}
              onRemove = {removeHandler.bind(null , item.id)}
            ></CartItem>
            // <li key={item.id}>
            //   <span>{item.name} </span>
            //   <span>
            //     {item.price} x {item.quantity}
            //   </span>
            // </li>
          );
        })}
      </ul>
      <div className="total">
        <div><h3>Total Amount</h3></div>
        <div>₹{totalAmount}</div>
      </div>
      <div className="button-div">
        <button onClick={closeHandler} className="button">
          Close
        </button>
        {hasItems && (
          <button
            onClick={() => {
              console.log("Ordering");
            }}
            className="button"
          >
            Order
          </button>
        )}
      </div>
    </Modal>,
    document.getElementById("overlay")
  );
};

export default Cart;
