import React from "react";

import BackLink from "../BackLink";
import ServiceItem from "./ServiceItem";

const ServicesInfo = () => {
  return (
    <section className="flex flex-col space-y-12 zaggy-bg px-40 py-16 text-[#4B2615]">
      <BackLink />

      <h1 className="text-3xl font-medium">Legal Consultation Services</h1>

      <p>
        Law Firm is one of the leading legal offices that offer exceptional
        advisory services for both individuals and companies. Our mission is to
        provide comprehensive and specialized legal support to meet our
        clients&apos; needs and offer the best legal solutions in various cases
        and legal fields, we provide our legal consultations services as a
        follow:
      </p>

      <div className="flex flex-col space-y-8">
        <ServiceItem
          title="General Legal Consultations"
          services={[
            {
              description:
                "At Law Firm, we provide comprehensive legal consultations covering all legal aspects that our clients may encounter in their daily lives or business activities. Our goal is to offer accurate legal advice based on a deep understanding of local and international laws.",
            },
          ]}
        />

        <ServiceItem
          title="Corporate Legal Consultations"
          services={[
            {
              description:
                "We at the Law Firm understand the importance of legal consultations for companies in building and enhancing their businesses.",
              works: [
                {
                  title: "Our advisory services about:",
                  thingsDone: [
                    "Establishing and registering companies.",
                    "All kinds of contracts and agreements.",
                    "Commercial disputes.",
                    "Compliance with local and international laws and regulations.",
                  ],
                },
              ],
            },
          ]}
        />

        <ServiceItem
          title="Individual Legal Consultations"
          services={[
            {
              description:
                "Law Firm offers customized advisory services for individuals, including:",
              works: [
                {
                  thingsDone: [
                    "Family issues such as divorce, alimony, and custody.",
                    "Real estate matters like buying, selling, and renting properties.",
                    "Employment issues such as hiring and wrongful termination.",
                    "Criminal cases and defending personal rights.",
                  ],
                },
              ],
            },
          ]}
        />
      </div>

      <p>
        At Law Firm, we aim to provide the best legal services to ensure your
        rights and offer effective legal solutions. Contact us today to receive
        professional and comprehensive legal consultation.
      </p>
    </section>
  );
};

export default ServicesInfo;
