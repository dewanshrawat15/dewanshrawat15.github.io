<template>
  <v-app class="white work">
    <v-container class="pa-0 mb-3">
      <v-layout
        text-center
        wrap
      >
        <v-flex xs11 style="margin-top: 100px; padding-top: 70px; text-align: left; margin-bottom: 60px;">
          <h1 class="display-2 font-weight-light mb-3">
            What I've <span style="color: #580aff;">built</span>.
          </h1>
          <p class="font-weight-light mb-1" style="font-size: 20px;">
            {{ content.projectsContent }}
          </p>
        </v-flex>
      </v-layout>

      <v-layout
        text-center
        wrap
        row
        style="margin-bottom: 80px;"
      >
        <v-flex xs12 sm6 md4 lg4  xs6 v-for="(item, i) in projects" :key="i" style="text-align: left;" :id="item.id">
          <v-list three-line subheader>
            <v-list-item class="grey lighten-4" style="margin: 6px;">
              
              <v-list-item-avatar>
                <v-icon class="grey lighten-2" style="font-size: 18px;">
                  fa fa-code
                </v-icon>
              </v-list-item-avatar>
              
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
                <v-list-item-subtitle v-text="item.shortDescription"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action v-if="item.github">
                <v-btn icon :href="item.github">
                  <v-icon color="grey lighten-1">mdi-information</v-icon>
                </v-btn>
              </v-list-item-action>
              
            </v-list-item>
          </v-list>

        </v-flex>
      </v-layout>

    </v-container>
  </v-app>
</template>

<script>
import { db } from "../../firebase"
export default{
  data(){
    return {
      projects: '',
      content: ''
    }
  },
  firestore(){
    return {
      projects: db.collection("projects"),
      content: db.collection("details").doc("content")
    }
  }
}
</script>
