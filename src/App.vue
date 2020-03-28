<template>
  <v-app>
    <v-app-bar app v-if="!isMobile()">
      <v-toolbar-title class="headline font-weight-light">
        <span>{{ details.name }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-for="(link, i) in toolbarDetails.navbarLinks" :key="i" :to="link.link" text style="margin-left: 6px; margin-right: 6px;">
        {{ link.name }}
      </v-btn>
    </v-app-bar>
    <v-app-bar app v-if="isMobile()">
      <v-toolbar-title class="headline font-weight-light">
        <span>{{ details.name }}</span>
      </v-toolbar-title>
    </v-app-bar>
    
    <CommonView />

    <bottomNav/>
  </v-app>
</template>

<script>
import toolbarDetailsJson from "./assets/data/toolbar.json";
import { db } from './firebase'
import bottomNav from "./views/components/bottomNav";
import CommonView from "./views/components/view";

export default {
  name: 'App',
  components: {
    CommonView,
    bottomNav
  },
  data(){
    return {
      toolbarDetails: toolbarDetailsJson,
      details: ''
    }
  },
  firestore(){
    return {
      details: db.collection("details").doc("details")
    }
  },
  methods: {
    isMobile: function() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
  }
};
</script>