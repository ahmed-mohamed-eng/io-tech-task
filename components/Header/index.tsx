"use client";

import React from "react";

import NavContainer from "./NavContainer";
import BookAppointBtn from "./BookAppointBtn";
import SearchContainer from "./SearchContainer";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-center p-4">
      <NavContainer />
      <SearchContainer />
      <BookAppointBtn />
    </header>
  );
};

export default Header;
