import React from "react";
import {  ProductIds } from "@/components/types";
import BuyFlow from "@/components/organisms/Buyflow";

export default function DesignerInsurance() {
  return <BuyFlow productId={ProductIds.designerIns} />;
}