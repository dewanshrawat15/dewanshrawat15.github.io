<template>
  <v-app>
    <AboutMe/>
    <TechStacks/>
    <Experience/>
    <Talks/>
    <Portfolio/>
    <Footer/>
  </v-app>
</template>

<script>
import TechStacks from './components/techStacks';
import Experience from './components/experience';
import AboutMe from "./components/aboutMe";
import Talks from "./components/workshops";
import Portfolio from "./components/projects";
import Footer from "./components/footer";
export default {
  name: 'App',
  components: {
    AboutMe,
    TechStacks,
    Experience,
    Talks,
    Portfolio,
    Footer
  },
};
</script>