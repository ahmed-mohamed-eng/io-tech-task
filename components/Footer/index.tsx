import React from "react";

import QuickLinks from "./QuickLinks";
import ContactInfo from "./ContactInfo";

const Footer = () => {
  return (
    <footer className="w-full bg-[#4B2615] flex flex-col space-y-4 divide-y text-white px-28 py-16">
      <ContactInfo />
      <QuickLinks />
    </footer>
  );
};

export default Footer;
