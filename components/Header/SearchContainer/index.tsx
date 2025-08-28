import React from "react";

import { IoIosSearch } from "react-icons/io";

const SearchContainer = () => {
  return (
    <div className="flex items-center justify-center">
      <IoIosSearch fontSize="1.5rem" fill="#ffffff" color="#ffffff" />
      <input type="text" className="w-20 p-2 rounded-md border-white border" />
    </div>
  );
};

export default SearchContainer;
