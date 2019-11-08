<template>
  <v-app>
    <TechStacks/>
    <Project/>
    <Talks/>
    <Footer/>
  </v-app>
</template>

<script>
import TechStacks from './components/techStacks';
import Footer from "./components/footer";
import Project from "./components/projects";
import Talks from "./components/workshops";
export default {
  name: 'App',
  components: {
    TechStacks,
    Project,
    Talks,
    Footer
  },
};
</script>