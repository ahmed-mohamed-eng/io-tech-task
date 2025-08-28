import React from "react";

import TeamSlider from "./TeamSlider";

const OurTeams = () => {
  return (
    <section className="flex flex-col items-center space-y-8">
      <h2 className="text-3xl font-medium w-full text-center">Our Team</h2>
      <p className="text-xl w-full text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s
      </p>

      <TeamSlider />
    </section>
  );
};

export default OurTeams;
