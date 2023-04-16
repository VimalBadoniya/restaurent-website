import React from "react";

const dummyDataContext = React.createContext({
  items: [
    {
      id: "A1",
      name: "Dal Makhni",
      price: 100,
      description:
        "Made with urad dal and other pulses and includes butter and cream",
    },
    {
      id: "A2",
      name: "Chole Bhature",
      price: 150,
      description:
        "Chole rfers to the curry and Bhatura is crispy and fried bread",
    },
    {
      id: "A3",
      name: "Sarso Da Saag",
      price: 170,
      description: "Dish of mustard greens cooked with spices",
    },
    {
      id: "A4",
      name: "Butter Chicken",
      price: 110,
      description: "Chicken with spiced tomato and butter sauce",
    },
  ],
});

export default dummyDataContext;
