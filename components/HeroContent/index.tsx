import React from "react";
import Image from "next/image";

import SliderContent from "./SliderContent";

const HeroContent = () => {
  return (
    <section className="relative top-0 left-0 w-full bg-gradient-to-r from-[#4B261547] to-[#4B2615AD]">
      <Image
        src="https://placehold.co/600x400"
        alt="Hero Background"
        fill
        className="relative -z-50 w-full h-auto"
        style={{ objectFit: "cover" }}
      />

      <SliderContent />
    </section>
  );
};

export default HeroContent;
