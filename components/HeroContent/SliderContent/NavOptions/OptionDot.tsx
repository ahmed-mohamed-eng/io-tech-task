import React from "react";

export interface OptionDotProps {
  itemNumber: number;
  onClick: (x: number) => void;
}

const OptionDot = ({ itemNumber, onClick }: OptionDotProps) => {
  return (
    <button
      onClick={() => onClick(itemNumber)}
      className="w-4 h-4 rounded-full border border-white"
    />
  );
};

export default OptionDot;
