import React from "react";
import { iconType } from "../common/types";
import { TappableIcon } from "../common/Icon";

interface Props {
  title: string;
  subtitle: string;
  imageUrl: string;
  socialIcons: { icon: iconType; url: string }[];
}

export const HeroSection: React.FC<Props> = ({
  imageUrl,
  title,
  subtitle,
  socialIcons,
}) => {
  return (
    <div id="hero" className="py-12 bg-gray-100">
      <div className="flex w-full justify-center">
        <div className="flex flex-row">
          <div>
            <img
              className="rounded-full"
              height={256}
              width={256}
              src={imageUrl}
              alt={title}
            />
          </div>
        </div>
      </div>
      <div className="flex my-8 w-full justify-center">
        <h1 className="font-poppins text-3xl md:text-5xl font-medium">
          {title}
        </h1>
      </div>
      <div className="my-5 flex w-full justify-center">
        <p className="font-poppins text-md md:text-2xl font-extralight">
          {subtitle}
        </p>
      </div>
      <div className="my-8 flex space-x-5 sm:space-x-8 justify-center">
        {socialIcons.map((icon, index) => {
          return <TappableIcon key={index} icon={icon.icon} url={icon.url} />;
        })}
      </div>
    </div>
  );
};
