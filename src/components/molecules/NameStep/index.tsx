import React, { useState } from "react";
import { StepProps } from "@/components/types";
import InputField from "@/components/atoms/InputField";
import Button from "@/components/atoms/Button";

const NameStep: React.FC<StepProps> = ({ onClick }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = React.useState<string>("");

  const validateAndProceed = () => {
    if (!firstName || !lastName) {
      setError("Both first and last names are required.");
    } else {
      setError("");
      onClick("name", { firstName, lastName });
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <InputField
        label="First Name"
        value={firstName}
        type="text"
        onChange={(value) => setFirstName(value)}
      />
      <InputField
        label="Last Name"
        value={lastName}
        type="text"
        error={error}
        onChange={(value) => setLastName(value)}
      />
      <Button text="Next" onClick={validateAndProceed} />
    </div>
  );
};

export default NameStep;
