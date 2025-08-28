import React from "react";
import Image from "next/image";

export interface PersonCardProps {
  imageUrl: string;
  testimony: string;
  name: string;
  position: string;
}

const PersonCard = (props: PersonCardProps) => {
  return (
    <div className="grid grid-cols-8 gap-4 text-white">
      {/* Image */}
      <div className="relative col-span-3 h-72">
        <Image
          src={props.imageUrl}
          alt="personnel testimony"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Info */}
      <div className="col-span-5 flex flex-col justify-between space-y-8">
        <p className="font-medium text-xl">&quot;{props.testimony}&quot;</p>

        <div className="flex flex-col space-y-4">
          <h4 className="font-bold">{props.name}</h4>
          <p className="text-sm font-bold">{props.position}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
