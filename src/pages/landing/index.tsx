const socialMediaLinks: {
  url: string;
  type: "facebook" | "linkedin" | "instagram" | "spotify" | "github" | "mail";
}[] = [
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

const SocialMediaURLs = () => {
  return (
    <div className="mt-4 flex flex-row space-x-3">
      {socialMediaLinks.map((mediaLink, index) => {
        return (
          <div key={index}>
            <a
              href={mediaLink.url}
              target="_blank"
              className="text-black underline font-medium"
            >
              <span className="hidden md:block">{mediaLink.type}</span>
            </a>
          </div>
        );
      })}
    </div>
  );
};

const Hero = () => {
  return (
    <div id="hero">
      <div className="flex px-12 py-4">
        <div className="w-full md:w-3/5 pt-32">
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
    </>
  );
};
