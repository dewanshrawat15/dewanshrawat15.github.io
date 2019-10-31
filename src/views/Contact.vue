<template>
  <v-app>
    <ContactDetails/>
  </v-app>
</template>

<script>
import ContactDetails from './components/contactDetails';
export default {
  name: 'App',
  components: {
    ContactDetails
  },
};
</script>