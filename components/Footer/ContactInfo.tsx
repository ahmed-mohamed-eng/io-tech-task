import React from "react";

import Link from "next/link";

import { FaTwitter, FaFacebook, FaGooglePlusG } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="w-full flex items-center justify-end space-x-8">
      {/* Social Media Links */}
      <div className="flex items-center space-x-6">
        <p className="font-bold">Contacts</p>

        {/* Icons With Links */}
        <div className="flex items-center space-x-4">
          <Link href="#">
            <FaTwitter fontSize={25} />
          </Link>

          <Link href="#">
            <FaFacebook fontSize={25} />
          </Link>

          <Link href="#">
            <FaGooglePlusG fontSize={25} />
          </Link>
        </div>
      </div>

      {/* Enter email section */}
      <div className="p-4 bg-white rounded-md grid grid-cols-8 w-xl">
        <input
          type="text"
          placeholder="Enter your email"
          className="col-span-6 px-4 py-2 rounded-md focus:outline-none text-black"
        />

        <button className="col-span-2 bg-[#4B2615] text-white font-bold rounded-md">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default ContactInfo;
