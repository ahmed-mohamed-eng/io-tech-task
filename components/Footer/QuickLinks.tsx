import React from "react";
import Link from "next/link";

const QuickLinks = () => {
  return (
    <div className="w-full flex items-center justify-between space-x-8">
      <nav className="flex items-center justify-center space-x-6 font-medium">
        <Link href="/about-us">About Us</Link>
        <Link href="/our-strategy">Our Strategy</Link>
        <Link href="/our-advantages">Our Advantages</Link>
        <Link href="/social-responsibility">Social Responsibility</Link>
        <Link href="/our-services">Our Services</Link>
      </nav>

      <p className="font-medium">© 2024 . All rights reserved.</p>
    </div>
  );
};

export default QuickLinks;
