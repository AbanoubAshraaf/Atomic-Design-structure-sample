import React from "react";

interface InputFieldProps {
  label: string;
  value: string | number;
  type: string;
  error?: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, onChange, type, value, error }) => {

  return (
    <div className="flex flex-col gap-2 items-start">
      <label >{label}:</label>
      <input
        data-testid={label.toLocaleLowerCase()}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        type={type}
        className="input input-bordered input-primary w-full max-w-xs"
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};

export default InputField;
