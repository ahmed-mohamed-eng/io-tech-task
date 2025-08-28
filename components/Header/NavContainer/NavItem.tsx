import Link from "next/link";
import React from "react";

export interface NavItemProps {
  title: string;
  link: string;
}

const NavItem = ({ link, title }: NavItemProps) => {
  return (
    <Link
      className="transition-colors duration-75 ease-in-out p-2 bg-transparent hover:bg-[#ffffff37] text-white font-medium"
      href={link}
    >
      {title}
    </Link>
  );
};

export default NavItem;
