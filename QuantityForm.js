import React, { useRef } from "react";
import "./QuantityForm.css";
import CartContext from "../../source/cart-context";
import { useContext } from "react";

const QuantityForm = (props) => {
  const quantityRef = useRef();
  const ctx = useContext(CartContext);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(props.name);
    // console.log(props.price);
    // console.log(quantityRef.current.value)
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: quantityRef.current.value,
    };
    //console.log(item.quantity.current.value)
    //console.log(item)
    ctx.addItem(item);
  };

  return (
    <form className="quantity-form" onSubmit={formSubmitHandler}>
      <div>
        <label htmlFor="quantity" className="quantity-label">
          Quantity
        </label>
        <input
          id="quantity"
          type="number"
          className="quantity-input"
          defaultValue="1"
          min="1"
          max="5"
          ref={quantityRef}
        ></input>
      </div>
      <div>
        <button type="submit" className="quantity-button">
          +Add
        </button>
      </div>
    </form>
  );
};

export default QuantityForm;
