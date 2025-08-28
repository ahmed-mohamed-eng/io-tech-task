import React from "react";

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import { LiaFacebook, LiaWhatsapp } from "react-icons/lia";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

import TeamMemCard from "./TeamMemCard";

const TeamSlider = () => {
  return (
    <div className="flex items-center justify-center space-x-8">
      {/* Left Arrow */}
      <RiArrowLeftSLine fontSize="2.5rem" color="white" fill="white" />

      {/* Team Member Cards */}
      <div className="flex items-center justify-center space-x-6">
        <TeamMemCard
          imageUrl="https://placehold.co/600x400"
          name="John Doe"
          role="Project Manager"
          socialMedial={[
            {
              link: "#",
              icon: <FiPhone />,
            },
            {
              link: "#",
              icon: <LiaFacebook />,
            },
            {
              link: "#",
              icon: <LiaWhatsapp />,
            },
            {
              link: "#",
              icon: <MdOutlineMail />,
            },
          ]}
        />
      </div>

      {/* Right Arrow */}
      <RiArrowRightSLine fontSize="2.5rem" color="white" fill="white" />
    </div>
  );
};

export default TeamSlider;
