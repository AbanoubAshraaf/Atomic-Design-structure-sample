import React from "react";
import BuyFlow from "@/components/organisms/BuyFlow";
import { PRODUCT_PROPS, ProductIds } from "@/components/types";

export default function DesignerInsurance() {
  const designerProductProps = PRODUCT_PROPS[ProductIds.designerIns];

  return <BuyFlow {...designerProductProps} />;
}
