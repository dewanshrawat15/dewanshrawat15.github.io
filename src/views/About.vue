<template>
  <v-app>
    <AboutMe/>
    <Experience/>
    <Portfolio/>
    <Talks/>
    <Footer/>
  </v-app>
</template>

<script>
import Experience from './components/experience';
import AboutMe from "./components/aboutMe";
import Talks from "./components/workshops";
import Portfolio from "./components/projects";
import Footer from "./components/footer";
export default {
  name: 'App',
  components: {
    AboutMe,
    Experience,
    Talks,
    Portfolio,
    Footer
  },
};
</script>