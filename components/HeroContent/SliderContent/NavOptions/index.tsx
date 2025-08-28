import React from "react";

import { RiArrowLeftSLine } from "react-icons/ri";

import OptionDot from "./OptionDot";

const NavOptions = () => {
  return (
    <div className="flex flex-col space-y-8">
      <RiArrowLeftSLine fontSize="2.5rem" color="white" fill="white" />

      <div className="flex flex-col items-center space-y-4">
        <OptionDot itemNumber={0} onClick={() => {}} />
        <OptionDot itemNumber={1} onClick={() => {}} />
        <OptionDot itemNumber={2} onClick={() => {}} />
        <OptionDot itemNumber={3} onClick={() => {}} />
        <OptionDot itemNumber={4} onClick={() => {}} />
        <OptionDot itemNumber={5} onClick={() => {}} />
      </div>
    </div>
  );
};

export default NavOptions;
