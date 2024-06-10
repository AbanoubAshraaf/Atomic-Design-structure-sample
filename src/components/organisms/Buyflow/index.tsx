import React, { useCallback, useState } from "react";
import NameStep from "@/components/molecules/NameStep";
import AgeStep from "@/components/molecules/AgeStep";
import EmailStep from "@/components/molecules/EmailStep";
import SummaryStep from "@/components/molecules/SummaryStep";
import {
  BuyFlowProps,
  CollectedData,
  Name,
  StepsType,
} from "@/components/types";

const BuyFlow: React.FC<BuyFlowProps> = (props) => {
  const { dataSteps, productName } = props;
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [collectedData, updateCollectedData] = useState({});

  const getStepCallback = useCallback(
    (field: keyof CollectedData, value: string | number | Name) => {
      updateCollectedData((prevData) => ({ ...prevData, [field]: value }));
      setCurrentStep((prevStep) => prevStep + 1);
    },
    [],
  );

  const steps: StepsType = {
    email: { component: EmailStep, props: { onClick: getStepCallback } },
    age: { component: AgeStep, props: { onClick: getStepCallback } },
    name: { component: NameStep, props: { onClick: getStepCallback } },
    summary: {
      component: SummaryStep,
      props: { collectedData: collectedData as CollectedData },
    },
  };

  const stepName = dataSteps[currentStep];
  const CurrentStep = steps[stepName].component;
  const currentStepProps = steps[stepName].props;

  return (
    <div className="flex flex-col items-center">
      <h4 className="mb-6 text-2xl">Buying {productName}</h4>
      <div className="flex justify-center w-60">
        <CurrentStep {...currentStepProps} />
      </div>
    </div>
  );
};

export default BuyFlow;
