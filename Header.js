import React, { Fragment } from "react";
import Meals from "./Meals";
import "./Header.css";
import image from "../../assets/1317087.jpg";
import HeaderButton from "./HeaderButton";
import Summary from "./Summary";
const Header = (props) => {
  return (
    <Fragment>
      <header className="container">
        <h1 className="text">Punjabi Meals</h1>
        <HeaderButton  onclick={props.onclick}/>
      </header>
      <div className="photo-box">
        <img src={image} alt="Delicious Food!" className="photo"></img>
        <img src={image} alt="Delicious Food!" className="photo"></img>
        <img src={image} alt="Delicious Food!" className="photo"></img>
        <img src={image} alt="Delicious Food!" className="photo"></img>
        <img src={image} alt="Delicious Food!" className="photo"></img>
        <Summary></Summary>
        <Meals></Meals>
      </div>
    </Fragment>
  );
};

export default Header;
