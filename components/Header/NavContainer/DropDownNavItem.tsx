import React from "react";

import NavItem, { NavItemProps } from "./NavItem";

export interface DropDownNavItemProps {
  title: string;
  items: NavItemProps[];
}

const DropDownNavItem = ({ title, items }: DropDownNavItemProps) => {
  return (
    <div className="inline-block relative group">
      <button className="transition-colors duration-75 ease-in-out p-2 bg-transparent hover:bg-[#ffffff37] text-white font-medium">
        {title}
      </button>

      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        {items.map((item) => (
          <NavItem key={item.title} title={item.title} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default DropDownNavItem;
