<template>
  <v-app>
    <Project/>
    <Talks/>
    <HallOfFame/>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from "./components/footer";
import Project from "./components/projects";
import Talks from "./components/workshops";
import HallOfFame from "./components/hallOfFame";
export default {
  name: 'App',
  components: {
    Project,
    Talks,
    HallOfFame,
    Footer
  },
};
</script>