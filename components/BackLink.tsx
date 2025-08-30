import React from "react";
import Link from "next/link";

import { RiArrowLeftSLine } from "react-icons/ri";

export interface BackLinkProps {
  href?: string;
}

const BackLink = ({ href }: BackLinkProps) => {
  return (
    <Link className="flex items-center space-x-4" href={href || "/"}>
      <RiArrowLeftSLine fontSize="2.5rem" />
      <span>Back</span>
    </Link>
  );
};

export default BackLink;
