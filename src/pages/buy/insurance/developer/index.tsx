import React from "react";
import BuyFlow from "@/components/organisms/BuyFlow";

import { PRODUCT_PROPS, ProductIds } from "@/components/types";

export default function DeveloperInsurance() {
  const developerProductProps = PRODUCT_PROPS[ProductIds.developerIns];

  return <BuyFlow {...developerProductProps} />;
}
