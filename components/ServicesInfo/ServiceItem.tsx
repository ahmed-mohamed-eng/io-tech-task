import React from "react";

type ServicesWork = {
  title?: string;
  thingsDone: string[];
};

type Services = { description: string; works?: ServicesWork[] }[];

export interface ServiceItemProps {
  title: string;
  services?: Services;
}

const ServiceItem = ({ title, services }: ServiceItemProps) => {
  return (
    <div className="flex flex-col space-y-6">
      <h4 className="text-lg">{title}</h4>

      <div className="border-l flex flex-col space-y-4">
        {services?.map((service, idx) => {
          return (
            <div
              key={idx + service.description + idx}
              className="flex items-center space-x-2"
            >
              <div className="w-2 h-2 bg-[#4B2615] rounded-full" />
              <p className="text-[#1E1E1E] font-bold">{service.description}</p>

              {service.works?.map((work, wIdx) => {
                return (
                  <div
                    key={wIdx + (work?.title || "+") + wIdx}
                    className="flex items-center space-x-2"
                  >
                    {work.title ? (
                      <p className="text-[#1E1E1E] font-bold">{work.title}</p>
                    ) : null}
                    <ul className="flex flex-col space-y-2">
                      {work.thingsDone.map((thing, tIdx) => {
                        return <li key={tIdx + thing + tIdx}>- {thing}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceItem;
