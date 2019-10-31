<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline font-weight-light">
        <span>{{ profileJson.name }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-for="(link, i) in toolbarDetails.navbarLinks" :key="i" :to="link.link" text style="margin-left: 6px; margin-right: 6px;">
        {{ link.name }}
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import Home from './views/Home';
// import About from './views/About';
import toolbarDetailsJson from "./assets/data/toolbar.json";
import profileDetailsJson from "./assets/data/profile.json";

export default {
  name: 'App',
  
  data(){
    return {
      toolbarDetails: toolbarDetailsJson,
      profileJson: profileDetailsJson
    }
  }
};
</script>