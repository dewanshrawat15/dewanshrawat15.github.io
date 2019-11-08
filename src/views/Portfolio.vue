<template>
  <v-app>
    <TechStacks/>
    <Project/>
    <Footer/>
  </v-app>
</template>

<script>
import TechStacks from './components/techStacks';
import Footer from "./components/footer";
import Project from "./components/projects";
export default {
  name: 'App',
  components: {
    TechStacks,
    Project,
    Footer
  },
};
</script>