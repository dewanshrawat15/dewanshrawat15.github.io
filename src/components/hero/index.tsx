import { SocialMediaURLs } from "../social-media-urls";

export const Hero = () => {
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
