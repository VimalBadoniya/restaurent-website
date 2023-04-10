import React from "react";

const dummy_data = [
    { id : "A1" , name : "Hot Coffee" , price : 100 },
    { id : "A2" , name : "Cold Coffee" , price : 150 },
    { id : "A3" , name : "Lemon Ice Tea" , price : 170 },
    { id : "A4" , name : "Ginger Tea" , price : 110 },
]

const Meals = ()=>{
    let data = dummy_data.map((row)=>{
        return(<li>
            {row.name}
        </li>)
    })
    return(
        <section>
            <ul>
                {data}
            </ul>
        </section>
    )
};

export default Meals;