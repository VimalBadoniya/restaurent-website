import React from "react";
import "./Meals.css"

const dummy_data = [
    { id : "A1" , name : "Dal Makhni" , price : 100 , description : "Made with urad dal and other pulses and includes butter and cream" },
    { id : "A2" , name : "Chole Bhature" , price : 150 , description : "Chole rfers to the curry and Bhatura is crispy and fried bread" },
    { id : "A3" , name : "Sarso Da Saag" , price : 170 , description : "Dish of mustard greens cooked with spices" },
    { id : "A4" , name : "Butter Chicken" , price : 110 , description : "Chicken with spiced tomato and butter sauce"},
]

const Meals = ()=>{
    let data = dummy_data.map((row)=>{
        return(<li key={row.id}>
            <h3>{row.name}</h3>
            <p>{row.description}</p>
            <h3 className="price">₹{row.price}</h3>
        </li>)
    })
    return(
        <section className="menu"> 
            <ul>
                {data}
            </ul>
        </section>
    )
};

export default Meals;