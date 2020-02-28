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
        <v-flex xs10 offset-1 text-center style="padding-bottom: 30px;">
          <h1 class="display-2 font-weight-light mb-3">
            About <span style="color: #580aff;">Me</span>.
          </h1>
          <br><br>
          <p class="font-weight-light" style="font-size: 20px;">
            {{ profileJson.aboutText }}
          </p>
          <br><br>
          <v-btn target="_blank" href="https://drive.google.com/open?id=1G0OYVzM6N1l0lMBHXw9b5J9AkhGohM_S" color="#580aff" style="margin-right: 12px!important; text-transform: capitalize; border-radius:5px; color:white">
            My Resume
          </v-btn>
          &nbsp;
          <v-btn target="_blank" href="https://github.com/dewanshrawat15" rounded outlined color="#580aff" style="margin-left: 12px!important; text-transform: capitalize; border-radius:5px; text-transform: capitalize;" dark>
            My Github
          </v-btn>
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
