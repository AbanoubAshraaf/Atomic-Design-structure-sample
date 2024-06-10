import React, { useState } from "react";
import AgeStep from "../molecules/AgeStep";
import SummaryStep from "../molecules/SummaryStep";
import EmailStep from "../molecules/EmailStep";
import { BuyflowProps, PRODUCT_IDS_TO_NAMES } from "../types";



const Buyflow: React.FC<BuyflowProps> = (props) => {
  const [currentStep, setStep] = useState("email");
  const [collectedData, updateData] = useState({
    email: "",
    age: 0,
  });
  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value });
    setStep(nextStep);
  };
  return (
    <div className="flex flex-col items-center">
      <h4 className="mb-6 text-2xl">
        Buying {PRODUCT_IDS_TO_NAMES[props.productId]}
      </h4>
      <div className="flex justify-center w-60">
        {(currentStep === "email" && (
          <EmailStep onClick={getStepCallback("age")} />
        )) ||
          (currentStep === "age" && (
            <AgeStep onClick={getStepCallback("summary")} />
          )) ||
          (currentStep === "summary" && (
            <SummaryStep collectedData={collectedData} />
          ))}
      </div>
    </div>
  );
};

export default Buyflow;
