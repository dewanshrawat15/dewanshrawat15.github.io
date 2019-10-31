<template>
  <v-app>
    <Hero/>
    <TechStacks/>
    <Experience/>
    <ContactDetails/>
  </v-app>
</template>

<script>
import Hero from './components/hero';
import TechStacks from './components/techStacks';
import Experience from './components/experience';
import ContactDetails from "./components/contactDetails";
export default {
  name: 'App',
  components: {
    Hero,
    TechStacks,
    Experience,
    ContactDetails
  },
};
</script>