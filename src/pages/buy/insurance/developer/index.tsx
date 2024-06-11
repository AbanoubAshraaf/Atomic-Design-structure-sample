import React from "react";
import InsuranceBuyFlow from "@/components/organisms/InsuranceBuyFlow";

import { PRODUCT_PROPS, ProductIds } from "@/components/types";

export default function DeveloperInsurance() {
  const developerProductProps = PRODUCT_PROPS[ProductIds.developerIns];

  return <InsuranceBuyFlow {...developerProductProps} />;
}
