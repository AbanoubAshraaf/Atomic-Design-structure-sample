import React from "react";
import InsuranceBuyFlow from "@/components/organisms/InsuranceBuyFlow";
import { PRODUCT_PROPS, ProductIds } from "@/components/types";

export default function DesignerInsurance() {
  const designerProductProps = PRODUCT_PROPS[ProductIds.designerIns];

  return <InsuranceBuyFlow {...designerProductProps} />;
}
