
export interface BuyflowProps {
    productId: ProductIds;
}

export enum ProductIds {
    devIns = "dev_ins",
}

export const PRODUCT_IDS_TO_NAMES = {
    [ProductIds.devIns]: "Developer Insurance",
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