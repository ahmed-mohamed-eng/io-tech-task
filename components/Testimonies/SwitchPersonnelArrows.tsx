import React from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const SwitchPersonnelArrows = () => {
  return (
    <div className="w-full flex items-center justify-end space-x-6">
      {/* Left Arrow */}
      <button className="p-8 rounded-full bg-[#ffffff40] text-white data-[active]:bg-white data-[active]:text-[#4B2615]">
        <FaArrowLeft size="2.5rem" />
      </button>

      {/* Right Arrow */}
      <button className="p-8 rounded-full bg-[#ffffff40] text-white data-[active]:bg-white data-[active]:text-[#4B2615]">
        <FaArrowRight size="2.5rem" />
      </button>
    </div>
  );
};

export default SwitchPersonnelArrows;
