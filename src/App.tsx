import { HeroSection } from "./components/hero";

const App = () => {
  return (
    <>
      <HeroSection
        imageUrl="./profile-image.jpeg"
        title="Dewansh Rawat"
        subtitle="Builder | Generalist | Guitarist | Foodie"
        socialIcons={[
          {
            icon: "github",
            url: "https://github.com/dewanshrawat15",
          },
          {
            icon: "facebook",
            url: "https://facebook.com/dewanshrawat15",
          },
          {
            icon: "instagram",
            url: "https://instagram.com/dewanshrawat15",
          },
          {
            icon: "linkedin",
            url: "https://linkedin.com/in/dewanshrawat15",
          },
          {
            icon: "medium",
            url: "https://dewanshrawat15.medium.com",
          },
          {
            icon: "spotify",
            url: "https://open.spotify.com/dewanshrawat15",
          },
        ]}
      />
    </>
  );
};

export default App;
