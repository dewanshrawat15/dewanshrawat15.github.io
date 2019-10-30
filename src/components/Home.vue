<template>
  <v-app>
    <Hero/>
    <TechStacks/>
  </v-app>
</template>

<script>
import Hero from './hero';
import TechStacks from './techStacks';
export default {
  name: 'App',
  components: {
    Hero,
    TechStacks
  },
};
</script>