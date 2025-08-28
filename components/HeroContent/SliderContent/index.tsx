import React from "react";

import NavOptions from "./NavOptions";
import SliderItemsContainer from "./SliderItemsContainer";

const SliderContent = () => {
  return (
    <div className="w-full flex items-center justify-center space-x-8">
      <NavOptions />
      <SliderItemsContainer />
    </div>
  );
};

export default SliderContent;
