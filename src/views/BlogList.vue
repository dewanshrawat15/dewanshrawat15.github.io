<template>
  <v-app>
    <blogList/>
    <Footer/>
  </v-app>
</template>

<script>
import blogList from "./components/blogList";
import Footer from "./components/footer";
export default {
  name: 'App',
  components: {
    blogList,
    Footer
  },
};
</script>