import React, { useState } from "react";
import InputField from "@/components/atoms/InputField";
import Button from "@/components/atoms/Button";
import { StepProps } from "@/components/types";

const AgeStep: React.FC<StepProps> = ({ onClick }) => {
  const [age, setAge] = useState(0);
  const [error, setError] = React.useState<string>("");

  return (
    <div className="flex flex-col gap-4 w-full">
      <InputField
        label="Age"
        value={age}
        type="number"
        error={error}
        onChange={(value) => setAge(Number(value))}
      />
      <Button text="Buy Now" onClick={() => onClick("age", age)} />
    </div>
  );
};

export default AgeStep;
