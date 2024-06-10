import React, { useState } from "react";
import InputField from "@/components/atoms/InputField";
import Button from "@/components/atoms/Button";
import { StepProps } from "@/components/types";

const EmailStep: React.FC<StepProps> = ({ onClick }) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = React.useState<string>("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateAndProceed = () => {
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("")
      onClick("email", email);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <InputField
        label="Email"
        value={email}
        type="email"
        error={error}
        onChange={(value) => setEmail(value)}
      />
      <Button text="Next" onClick={validateAndProceed} />
    </div>
  );
};

export default EmailStep;
