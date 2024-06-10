import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const button: React.FC<ButtonProps> = ({ text, onClick }) => {

  return (
    <button className="btn btn-primary" onClick={onClick}>
      {text}
    </button>
  );
};

export default button;
