import React from "react";
import Buyflow from "@/components/buyflow/Buyflow";
import { ProductIds } from "@/components/types";

export default function InsuranceDev() {
  return <Buyflow productId={ProductIds.devIns} />;
}
