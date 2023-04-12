import React from "react";
import ReactDOM from "react-dom";
import "./Cart.css";
import Modal from "./Modal";

const Cart = (props) => {
  const closeHandler = ()=>{
       props.onclose()
  }
  return (
    ReactDOM.createPortal(
    <Modal>
        <ul>
          <li>Dal Makhni</li>
          <li>Butter Chicken</li>
        </ul>
        <div className="total">{" Total Amount - ₹500"}</div>
        <div className="button-div">
          <button onClick={closeHandler} className="button">Close</button>
          <button onClick={()=>{console.log("Ordering")}}  className="button">Order</button>
        </div>
        </Modal> , document.getElementById("overlay"))
    
  );
};

export default Cart;
