<template>
  <v-app class="workshops">
    <v-container>
      
      <v-layout
        text-center
        wrap
      >
        <v-flex xs-6 style="margin-top: 100px; padding-top: 70px; text-align: left;">
          <h1 class="display-2 font-weight-light mb-3">
            What I <span style="color: #580aff;">speak on</span>.
          </h1>
          <h1 class="font-weight-light mb-1" style="font-size: 24px;">
            {{ workJson.workshopContent }}
          </h1>
        </v-flex>
      </v-layout>

        <v-flex v-for="(item, i) in workJson.events" :key="i" xs-6 style="padding-top: 40px; padding-bottom: 20px; text-align: left;">
            <h3 class="display-1 font-weight-light">
            {{ i+1 }}. {{ item.name }}
            </h3>
            <h1 class="font-weight-light mb-3" style="font-size: 22px;">
            {{ item.date }}
            </h1>
        </v-flex>

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
