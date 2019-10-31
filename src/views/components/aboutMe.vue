<template>
  <v-app class="white hero">
    <v-container>
      <v-layout
        text-center
        wrap
      >
        <v-flex xs4 offset-4 style="margin-top: 80px;">
          <center>
            <v-img
              style="border-radius: 100%;"
              :src="require('@/assets/images/prof.jpeg')"
              :lazy-src="require('@/assets/images/prof.jpeg')"
              width="75%">
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

        <v-flex md-4 style="margin-top: 100px;">
          <h1 class="display-2 font-weight-light mb-3">
            About <span style="color: #580aff;">Me</span>.
          </h1>
          <br><br>
          <p class="font-weight-light headline">
            {{ profileJson.aboutText }}
          </p>
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
