import React from "react";

import TestimoniesHeader from "./TestimoniesHeader";
import SwitchPersonnelArrows from "./SwitchPersonnelArrows";
import PersonnelTestContainer from "./PersonnelTestContainer";

const Testimonies = () => {
  return (
    <section className="w-full flex flex-col space-y-4 bg-[#4B2615] py-24 px-28">
      <TestimoniesHeader />
      <PersonnelTestContainer />
      <SwitchPersonnelArrows />
    </section>
  );
};

export default Testimonies;
