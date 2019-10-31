<template>
  <v-app>
    <AboutMe/>
    <TechStacks/>
    <Experience/>
  </v-app>
</template>

<script>
import TechStacks from './components/techStacks';
import Experience from './components/experience';
import AboutMe from "./components/aboutMe";
export default {
  name: 'App',
  components: {
    AboutMe,
    TechStacks,
    Experience
  },
};
</script>