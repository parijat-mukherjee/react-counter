import { useState } from "react";

export default function Step(props) {
  const [step, setStep] = useState(1);

  function upStep() {
    setStep(step + props.stepCount);

    props.passUp(step);
  }

  function downStep() {
    setStep(step - props.stepCount);
    props.passUp(step);
  }

  const stepView = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button onClick={downStep}>-</button>
      <h3>
        {props.displayTag}: {step}{" "}
      </h3>
      <button onClick={upStep}>+</button>
    </div>
  );

  return stepView;
}
