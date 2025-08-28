import Image from "next/image";
import Link from "next/link";
import React from "react";

type SocialMediaInfo = {
  link: string;
  imageUrl?: string;
  icon?: React.JSX.Element;
};

export interface TeamMemCard {
  imageUrl: string;
  name: string;
  role: string;

  socialMedial: SocialMediaInfo[];
}

const TeamMemCard = (props: TeamMemCard) => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="relative w-xs h-40">
        <Image
          src={props.imageUrl}
          alt={props.name}
          fill
          className="object-cover rounded-lg"
          style={{ objectFit: "cover" }}
        />
      </div>

      <h3 className="text-xl">{props.name}</h3>
      <p className="#15143966">{props.role}</p>

      <div className="flex items-center justify-center space-x-3">
        {props.socialMedial.map((social, index) => {
          if (social.imageUrl) {
            return (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative w-6 h-6">
                  <Image
                    src={social.imageUrl}
                    alt="Social Media Icon"
                    fill
                    className="object-contain"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </Link>
            );
          } else if (social.icon) {
            return (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </Link>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default TeamMemCard;
