import React, { useContext } from "react";
import "./Meals.css";
import QuantityForm from "./QuantityForm";
import dummyDataContext from "../../source/dummy-data-context";

const Meals = () => {
  let ctx = useContext(dummyDataContext);
  //console.log(ctx)
  let data = ctx.items.map((row) => {
    return (
      <li key={row.id} className="li-grid">
        <div className="left">
          <h3>{row.name}</h3>
          <p>{row.description}</p>
          <h3 className="price">₹{row.price}</h3>
        </div>
        <div className="right">
          <QuantityForm
            name={row.name}
            price={row.price}
            id={row.id}
          ></QuantityForm>
        </div>
      </li>
    );
  });
  return (
    <section className="menu">
      <ul>{data}</ul>
    </section>
  );
};

export default Meals;
