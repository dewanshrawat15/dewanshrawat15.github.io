<template>
  <v-card color="white" height="50px" class="white hidden-sm-and-up" text>
    <v-bottom-navigation
      :value="true"
      app
      style="padding-top: 8px;"
      color="white"
      class="elevation-2"
    >
      <v-btn
        color="#580aff"
        text
        value="Home"
        router
        to="/"
      >
        <span>Home</span>
        <v-icon>fa fa-home</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn
        color="#580aff"
        text
        value="About"
        router
        to="/about"
      >
        <span>About</span>
        <v-icon>fa fa-user</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn
        color="#580aff"
        text
        value="Portfolio"
        router
        to="/portfolio"
      >
        <span>Portfolio</span>
        <v-icon>fa fa-keyboard</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn
        color="#580aff"
        text
        value="contact"
        router
        to="/contact"
      >
        <span>Contact</span>
        <v-icon>fa fa-phone</v-icon>
      </v-btn>

    </v-bottom-navigation>
  </v-card>
</template>


<script>
  export default {
    data () {
      return {
        bottomNav: 'recent',
      }
    }
  }
</script>