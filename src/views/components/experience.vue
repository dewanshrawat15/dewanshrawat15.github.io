<template>
  <v-app class="experience white">
    <v-container>
      
      <v-layout
        text-center
        wrap
        style="margin-bottom: 80px;"
      >
        <v-flex xs-6 style="margin-top: 100px; padding-top: 70px; text-align: left; margin-bottom: 60px;">
          <h1 class="display-2 font-weight-light mb-3">
            Positions of <span style="color: #580aff;">Responsibility</span>.
          </h1>
          <p class="font-weight-light mb-1" style="font-size: 24px;">
            {{ workJson.responsibilityContent }}
          </p>
        </v-flex>

        <v-flex v-for="(item, i) in workJson.positions" :key="i" xs-6 style="padding-top: 40px; padding-bottom: 20px; text-align: left;">
          <h3 class="display-1 font-weight-light">
            {{ i+1 }}. {{ item.title }} @ <a style="text-decoration:none!important;" :name="item.name" target="_blank" :href="item.instituteURL"><span style="color: #580aff;">{{ item.institute }}</span></a>.
          </h3>
          <h1 class="font-weight-light mb-3" style="font-size: 22px;">
            {{ item.period }}
          </h1>
          <p class="font-weight-light mb-1 title">
            {{ item.aboutPosition }}
          </p>
        </v-flex>
      </v-layout>

    </v-container>
  </v-app>
</template>

<script>
import workDataJson from "../../assets/data/work.json";
export default{
  data(){
    return {
      workJson: workDataJson
    }
  }
}
</script>
