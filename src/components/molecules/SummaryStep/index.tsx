import React from "react";
import Link from "next/link";
import { SummaryStepProps } from "@/components/types";

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  const {
    collectedData: { age, email },
  } = props;
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2 items-start">
        <div>Email: {email}</div>
        <div>Age: {age}</div>
      </div>
      <Link className="btn btn-primary" href="/purchased=dev_ins">
        Purchase
      </Link>
    </div>
  );
};

export default SummaryStep;
