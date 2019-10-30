<template>
  <v-app class="home">
    <v-container>
      
      <v-layout
        text-center
        wrap
      >
        <v-flex xs-6 style="margin-top: 100px; padding-top: 70px; text-align: left;">
          <h1 class="display-2 font-weight-light mb-3">
            What I <span style="color: #580aff;">work on</span>.
          </h1>
          <h1 class="font-weight-light mb-1" style="font-size: 24px;">
            {{ workJson.techStacksContent }}
          </h1>
        </v-flex>
      </v-layout>

      <v-flex xs12 style="margin-top: 80px; margin-bottom: 80px;">
        <center>
          <v-img
            :src="require('@/assets/images/techstacks/poster.png')"
            :lazy-src="require('@/assets/images/techstacks/poster.png')"
            width="64%">
            <v-layout
              slot="placeholder"
              align-center
              justify-center
            >
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </v-img>
        </center>
      </v-flex>

    </v-container>
  </v-app>
</template>

<script>
import workDataJson from "../assets/data/work.json";
export default{
  methods: {
    loadImg(imgPath) {
      return require('./' + imgPath)
    },
  },
  data(){
    return {
      workJson: workDataJson
    }
  }
}
</script>
