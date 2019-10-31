<template>
  <v-app>
    <AboutMe/>
    <TechStacks/>
    <Experience/>
    <Footer/>
  </v-app>
</template>

<script>
import TechStacks from './components/techStacks';
import Experience from './components/experience';
import AboutMe from "./components/aboutMe";
import Footer from "./components/footer";
export default {
  name: 'App',
  components: {
    AboutMe,
    TechStacks,
    Experience,
    Footer
  },
};
</script>