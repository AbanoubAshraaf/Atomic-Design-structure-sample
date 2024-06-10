export interface BuyFlowProps {
  productId: ProductIds;
}

export enum ProductIds {
  developerIns = "developer_ins",
  designerIns = "designer_ins",
}

export type Step = "email" | "age" | "summary";

export const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.developerIns]: "Developer Insurance",
  [ProductIds.designerIns]: "Designer Insurance",
};

export interface CollectedData {
  email: string;
  age: number;
}

export interface StepProps {
  onClick: (field: keyof CollectedData, value: string | number) => void;
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
