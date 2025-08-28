import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface SliderItemProps {
  title: string;
  description: string;
  imageUrl: string;
  readMoreUrl: string;
}

const SliderItem = (props: SliderItemProps) => {
  return (
    <div className="flex items-center justify-center space-x-6">
      {/* Person Image */}
      <div className="relative w-2xl h-2xl">
        <Image
          src={props.imageUrl}
          alt={props.title}
          fill
          className="w-full h-full"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col space-y-8">
        <h2 className="text-4xl font-bold text-white">{props.title}</h2>
        <p className="text-lg text-white max-w-md">{props.description}</p>
        <Link
          href={props.readMoreUrl}
          className="bg-white rounded-md px-6 py-3"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default SliderItem;
