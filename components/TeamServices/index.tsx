"use client";

import React from "react";

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import BackLink from "../BackLink";
import TeamServiceItem from "./TeamServiceItem";
import ReactPaginate from "react-paginate";

const TeamServices = () => {
  return (
    <section className="flex flex-col space-y-12 px-40 py-16 text-[#4B2615]">
      <BackLink />

      <div className="grid grid-cols-12">
        {/* Main Header */}
        <p className="flex items-center justify-center p-12 bg-[#FAFAFA]">
          Team Services
        </p>

        {/* Services */}
        <div className="flex flex-col space-y-8 divide-y">
          <TeamServiceItem
            link="#"
            title="Law Firm is one of the leading legal offices"
          />

          <TeamServiceItem
            link="#"
            title="Law Firm is one of the leading legal offices"
          />
        </div>
      </div>

      <div className="w-full flex items-center justify-end">
        <ReactPaginate
          breakLabel="..."
          nextLabel={<RiArrowRightSLine fontSize="1rem" />}
          previousLabel={<RiArrowLeftSLine fontSize="1rem" />}
          pageCount={999}
          activeClassName="border border-[#4B2615] rounded-sm"
          className="text-[#4B2615]"
        />
      </div>
    </section>
  );
};

export default TeamServices;
