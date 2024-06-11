export interface InsuranceBuyFlowProps {
  dataSteps: Step[];
  productName: string;
}

export enum ProductIds {
  developerIns = "developer_ins",
  designerIns = "designer_ins",
}

export type Step = "email" | "age" | "summary" | "name";

export const PRODUCT_PROPS: Record<ProductIds, InsuranceBuyFlowProps> = {
  [ProductIds.developerIns]: {
    dataSteps: ["email", "age", "summary"],
    productName: "Developer Insurance",
  },
  [ProductIds.designerIns]: {
    dataSteps: ["email", "name", "age", "summary"],
    productName: "Designer Insurance",
  },
};

export interface Name {
  firstName: string;
  lastName: string;
}

export interface CollectedData {
  email: string;
  age: number;
  name?: Name;
}

export interface StepProps {
  onClick: (field: keyof CollectedData, value: string | number | Name) => void;
}

export interface SummaryStepProps {
  collectedData: CollectedData;
}

export interface StepInterface {
  component: React.FC<any>;
  props: StepProps | SummaryStepProps;
}

export type StepsType = {
  [s in Step]: StepInterface;
};
