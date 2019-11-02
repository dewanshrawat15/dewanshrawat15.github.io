<template>
  <v-app class="white hero">
    <v-container>
      <v-layout
        text-center
        wrap
        style="margin-bottom: 100px;"
      >
        <v-flex xs4 offset-4 style="margin-top: 80px;">
          <center>
            <v-img
              style="border-radius: 100%;"
              :src="require('@/assets/images/prof.webp')"
              :lazy-src="require('@/assets/images/prof.webp')"
              width="500px"
            >
              <v-layout
                slot="placeholder"
                fill-height
                align-center
                justify-center
                ma-0
              >
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
            </v-img>
          </center>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex md10 offset-1 text-center>
          <h1 class="display-2 font-weight-light mb-3">
            About <span style="color: #580aff;">Me</span>.
          </h1>
          <br><br>
          <p class="font-weight-light headline">
            {{ profileJson.aboutText }}
          </p>
        </v-flex>
      </v-layout>
      <v-layout style="margin-bottom: 60px; margin-top: 60px;">
        <v-flex xs4 offset-4>
          <center>
            <v-btn target="_blank" href="https://drive.google.com/open?id=1G0OYVzM6N1l0lMBHXw9b5J9AkhGohM_S" color="#580aff" style="margin-right: 12px!important; text-transform: capitalize; border-radius:5px; color:white" class="ma-0 elevation-1">
              My Resume
            </v-btn>
            <v-btn target="_blank" href="https://github.com/dewanshrawat15" rounded outlined color="#580aff" style="text-transform: capitalize; border-radius:5px; text-transform: capitalize; margin-left: 12px!important;" class="ml-0" dark>
              My Github
            </v-btn>
          </center>
        </v-flex>
      </v-layout>

    </v-container>
  </v-app>
</template>

<script>
import profileDetailsJson from "../../assets/data/profile.json";
export default{
  data(){
    return {
      profileJson: profileDetailsJson
    }
  }
}
</script>
