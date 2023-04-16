import React from "react";
import dummyDataContext from "./dummy-data-context";
import Meals from "../components/UI/Meals";

const DummyDataProvider = () => {
  return (
    <dummyDataContext.Provider>
      <Meals />
    </dummyDataContext.Provider>
  );
};
