import React from "react";
import Step from "./Step";

export default function App() {
  let childData = 1;

  const getData = (cData) => {
    childData = cData + 1;
  };
  return (
    <>
      <Step displayTag={"Step"} stepCount={1} passUp={getData} />;
      <Step displayTag={"Count"} stepCount={childData} passUp={getData} />;
    </>
  );
}
