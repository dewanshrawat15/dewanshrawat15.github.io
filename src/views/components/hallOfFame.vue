<template>
  <v-app class="hallOfFame white">
    <v-container>
      
      <v-layout
        text-center
        wrap
        style="margin-bottom: 80px;"
      >
        <v-flex xs-6 style="margin-top: 100px; padding-top: 70px; text-align: left; margin-bottom: 60px;">
          <h1 class="display-2 font-weight-light mb-3">
            Hall of <span style="color: #580aff;">Fame</span>.
          </h1>
          <p class="font-weight-light mb-1" style="font-size: 24px;">
            {{ content.hallOfFameContent }}
          </p>
        </v-flex>

        <v-flex v-for="(item, i) in competitions" :key="i" xs-6 style="padding-top: 40px; padding-bottom: 20px; text-align: left;">
          <h3 class="display-1 font-weight-light">
            {{ i+1 }}. <a style="text-decoration:none!important;" :name="item.name" target="_blank" :href="item.link"><span style="color: #580aff;">{{ item.title }}</span></a>
          </h3>
          <h1 class="font-weight-light mb-3" style="font-size: 22px;">
            {{ item.date }}
          </h1>
          <h1 class="font-weight-light mb-3" style="font-size: 22px;">
            Organised by {{ item.organisers }} at {{ item.venue }}
          </h1>
          <p class="font-weight-light mb-1 title">
            {{ item.description }}
          </p>
        </v-flex>
      </v-layout>

    </v-container>
  </v-app>
</template>

<script>
import { db } from '../../firebase'
export default{
  data(){
    return {
      content: '',
      competitions: ''
    }
  },
  firestore(){
    return {
      content: db.collection("details").doc("content"),
      competitions: db.collection("competitions")
    }
  }
}
</script>
