import React, { useState, useCallback } from "react";

import { BuyFlowProps, Step, StepsType, CollectedData, PRODUCT_IDS_TO_NAMES } from "../../types";
import EmailStep from "@/components/molecules/EmailStep";
import AgeStep from "@/components/molecules/AgeStep";
import SummaryStep from "@/components/molecules/SummaryStep";

const BuyFlow: React.FC<BuyFlowProps> = (props) => {
  const [currentStep, setCurrentStep] = useState<Step>("email");
  const [collectedData, updateCollectedData] = useState({});

  const getStepCallback = useCallback(
    (nextStep: Step) => (field: keyof CollectedData, value: string | number) => {
      updateCollectedData((prevData) => ({ ...prevData, [field]: value }));
      setCurrentStep(nextStep);
    },
    []
  );

  const steps: StepsType = {
    email: { component: EmailStep, props: { onClick: getStepCallback("age") } },
    age: { component: AgeStep, props: { onClick: getStepCallback("summary") } },
    summary: { component: SummaryStep, props: { collectedData: collectedData as CollectedData } },
  };

  const CurrentStep = steps[currentStep].component;
  const currentStepProps = steps[currentStep].props;

  return (
    <div className="flex flex-col items-center">
      <h4 className="mb-6 text-2xl">
        Buying {PRODUCT_IDS_TO_NAMES[props.productId]}
      </h4>
      <div className="flex justify-center w-60">
        <CurrentStep {...currentStepProps} />
      </div>
    </div>
  );
};

export default BuyFlow;
