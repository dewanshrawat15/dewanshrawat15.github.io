<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline font-weight-light">
        <span>{{ profileJson.name }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-for="(link, i) in toolbarDetails.navbarLinks" :key="i" :to="link.to" @click="onClick($event, link)" text>
        {{ link.name }}
      </v-btn>
    </v-app-bar>

    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home';
import toolbarDetailsJson from "./assets/data/toolbar.json";
import profileDetailsJson from "./assets/data/profile.json";

export default {
  name: 'App',
  components: {
    Home,
  },
  data(){
    return {
      toolbarDetails: toolbarDetailsJson,
      profileJson: profileDetailsJson
    }
  },
  methods: {
    onClick (e, item) {
      e.stopPropagation()
      if (item.to || !item.href) return
      this.$vuetify.goTo(item.href)
    }
  }
};
</script>