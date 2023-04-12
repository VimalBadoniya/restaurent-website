import React from "react";
import "./QuantityForm.css"


const QuantityForm = () => {
  return (
    
      <form className="quantity-form"> 
        <div>
          <label htmlFor="quantity" className="quantity-label">Quantity</label>
          <input id="quantity" type="number" className="quantity-input" defaultValue="0"></input>
        </div>
        <div>
          <button type="submit" className="quantity-button">+Add</button>
        </div>
      </form>
    
  );
};

export default QuantityForm;
