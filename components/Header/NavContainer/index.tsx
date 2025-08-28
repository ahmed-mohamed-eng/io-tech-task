import React from "react";
import NavItem from "./NavItem";
import DropDownNavItem from "./DropDownNavItem";

const NavContainer = () => {
  return (
    <nav className="flex items-center justify-center space-x-4">
      <NavItem title="Home" link="/" />
      <NavItem title="About Us" link="/about-us" />
      <DropDownNavItem title="Our Services" items={[]} />
      <NavItem title="Our Team" link="/our-team" />
      <NavItem title="Contact Us" link="/contact-us" />
    </nav>
  );
};

export default NavContainer;
