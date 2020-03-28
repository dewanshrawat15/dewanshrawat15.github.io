<template>
  <v-app>
    <blogPost/>
    <Footer/>
  </v-app>
</template>

<script>
import blogPost from "./components/blogPost";
import Footer from "./components/footer";
export default {
  name: 'App',
  components: {
    blogPost,
    Footer
  },
};
</script>