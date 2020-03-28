<template>
  <v-app>
    <Hero/>
    <Experience/>
    <HallOfFame/>
    <ContactDetails/>
    <Footer/>
  </v-app>
</template>

<script>
import Hero from './components/hero';
import Experience from './components/experience';
import ContactDetails from "./components/contactDetails";
import Footer from "./components/footer";
import HallOfFame from "./components/hallOfFame";
export default {
  name: 'App',
  components: {
    Hero,
    Experience,
    HallOfFame,
    ContactDetails,
    Footer
  },
};
</script>