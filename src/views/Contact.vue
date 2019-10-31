<template>
  <v-app>
    <ContactDetails/>
    <Footer/>
  </v-app>
</template>

<script>
import ContactDetails from './components/contactDetails';
import Footer from "./components/footer";
export default {
  name: 'App',
  components: {
    ContactDetails,
    Footer
  },
};
</script>