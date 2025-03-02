import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { URLProps, URLType } from "../../utils/models";
import { useMemo } from "react";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../../components/footer";

const socialMediaLinks: URLProps[] = [
  {
    url: "https://facebook.com/dewanshrawat15",
    type: "facebook",
  },
  {
    url: "https://github.com/dewanshrawat15",
    type: "github",
  },
  {
    url: "https://linkedin.com/in/dewanshrawat15",
    type: "linkedin",
  },
  {
    url: "https://instagram.com/dewanshrawat15",
    type: "instagram",
  },
  {
    url: "https://open.spotify.com/user/dewanshrawat15",
    type: "spotify",
  },
  {
    url: "mailto:dewanshrawat.work@gmail.com",
    type: "mail",
  },
];

const MediaLink = ({
  mediaLink,
}: {
  mediaLink: { url: string; type: URLType };
}) => {
  const mediaIcon = useMemo(() => {
    switch (mediaLink.type) {
      case "facebook":
        return faFacebook;
      case "github":
        return faGithub;
      case "instagram":
        return faInstagram;
      case "linkedin":
        return faLinkedin;
      case "mail":
        return faEnvelope;
      case "spotify":
        return faSpotify;
      default:
        return null;
    }
  }, [mediaLink.type]);

  return (
    <div className="duration-200 hover:scale-110 scale-100">
      <a
        href={mediaLink.url}
        target="_blank"
        className="text-black underline cursor-pointer font-medium"
      >
        <span className="hidden md:block">{mediaLink.type}</span>
        {mediaIcon !== null ? (
          <FontAwesomeIcon
            icon={mediaIcon}
            className="block w-6 h-6 md:hidden"
          />
        ) : (
          <></>
        )}
      </a>
    </div>
  );
};

const SocialMediaURLs = () => {
  return (
    <div className="mt-4 flex flex-row space-x-5 md:space-x-3">
      {socialMediaLinks.map((mediaLink, index) => {
        return <MediaLink key={index} mediaLink={mediaLink} />;
      })}
    </div>
  );
};

const Hero = () => {
  return (
    <div id="hero">
      <div className="flex px-12 py-4">
        <div className="w-full md:w-3/5 pt-12 sm:pt-32">
          <h1 className="font-sans font-bold text-lg md:text-2xl xl:text-5xl">
            My name is Dewansh Rawat, a Software Engineer working and living in
            Delhi.
          </h1>
          <p className="text-sm md:text-md xl:text-xl text-gray-500 font-light mt-4 md:mt-12">
            I'm a full-stack engineer specializing in crafting innovative web
            and mobile solutions using technologies like React, Typescript, and
            Python. I excel at solving complex problems, optimizing performance,
            and delivering seamless user experiences across diverse industries.
            I build impactful applications to bring positive change.
          </p>
          <SocialMediaURLs />
        </div>
      </div>
    </div>
  );
};

export const LandingPage = () => {
  return (
    <>
      <Hero />
      <Footer />
    </>
  );
};
