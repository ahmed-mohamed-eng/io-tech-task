import Link from "next/link";
import React from "react";

export interface TeamServiceItemProps {
  title: string;
  link: string;

  description?: string;
}

const TeamServiceItem = (props: TeamServiceItemProps) => {
  return (
    <div className="flex flex-col space-y-4">
      <h4 className="text-xl">{props.title}</h4>
      {props.description ? (
        <p className="text-gray-500">{props.description}</p>
      ) : null}

      <Link href={props.link} className="underline">
        Read More
      </Link>
    </div>
  );
};

export default TeamServiceItem;
