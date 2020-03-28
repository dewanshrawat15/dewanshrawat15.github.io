<template>
  <v-app class="white hero">
    <v-container>
      <v-layout
        text-center
        wrap
      >
        <v-flex xs6 style="margin-top: 100px;">
          <center>
            <v-img
              style="border-radius: 100%;"
              :src="details.profileImage"
              :lazy-src="details.profileImage"
              
              width="400px">
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

        <v-flex xs-6 style="margin-top: 75px; padding-top: 70px; text-align: left;">
          <h1 class="display-1 font-weight-light mb-3">
            {{ details.greeting }}
          </h1>
          <h1 class="display-2 font-weight-light mb-3">
            This is <span :style="this.details.style">{{this.details.name}}</span>.
          </h1>
          <br>
          <div class="icon-row">
            <span style="margin-left: 5px; margin-right: 5px; padding: 3px;" >
              <v-tooltip bottom v-if="details.facebook">
                <template v-slot:activator="{ on }">
                  <v-btn color="#15171c" dark v-on="on" text icon :href="details.facebook" target="_blank" slot="activator" name="Facebook">
                    <v-icon>fab fa-facebook</v-icon>
                  </v-btn>
                </template>
                <span>Facebook</span>
              </v-tooltip>
            </span>
            <span style="margin-left: 5px; margin-right: 5px; padding: 3px;" >
              <v-tooltip bottom v-if="details.instagram">
                <template v-slot:activator="{ on }">
                  <v-btn color="#15171c" dark v-on="on" text icon :href="details.instagram" target="_blank" slot="activator" name="Instagram">
                    <v-icon>fab fa-instagram</v-icon>
                  </v-btn>
                </template>
                <span>Instagram</span>
              </v-tooltip>
            </span>
            <span style="margin-left: 5px; margin-right: 5px; padding: 3px;">
              <v-tooltip bottom v-if="details.twitter">
                <template v-slot:activator="{ on }">
                  <v-btn color="#15171c" dark v-on="on" text icon :href="details.twitter" target="_blank" slot="activator" name="Twitter">
                    <v-icon>fab fa-twitter</v-icon>
                  </v-btn>
                </template>
                <span>Twitter</span>
              </v-tooltip>
            </span>
            <span style="margin-left: 5px; margin-right: 5px; padding: 3px;">
              <v-tooltip bottom v-if="details.email">
                <template v-slot:activator="{ on }">
                  <v-btn color="#15171c" dark v-on="on" text icon :href="convertToMail(details.email)" target="_blank" slot="activator" name="Email">
                    <v-icon>fa fa-envelope</v-icon>
                  </v-btn>
                </template>
                <span>Email</span>
              </v-tooltip>
            </span>
            <span style="margin-left: 5px; margin-right: 5px; padding: 3px;">
              <v-tooltip bottom v-if="details.github">
                <template v-slot:activator="{ on }">
                  <v-btn color="#15171c" dark v-on="on" text icon :href="details.github" target="_blank" slot="activator" name="Github">
                    <v-icon>fab fa-github</v-icon>
                  </v-btn>
                </template>
                <span>Github</span>
              </v-tooltip>
            </span>
            <span style="margin-left: 5px; margin-right: 5px; padding: 3px;">
              <v-tooltip bottom v-if="details.linkedin">
                <template v-slot:activator="{ on }">
                  <v-btn color="#15171c" dark v-on="on" text icon :href="details.linkedin" target="_blank" slot="activator" name="LinkedIn">
                    <v-icon>fab fa-linkedin</v-icon>
                  </v-btn>
                </template>
                <span>LinkedIn</span>
              </v-tooltip>
            </span>
            <span style="margin-left: 5px; margin-right: 5px; padding: 3px;">
              <v-tooltip bottom v-if="details.medium">
                <template v-slot:activator="{ on }">
                  <v-btn color="#15171c" dark v-on="on" text icon :href="details.medium" target="_blank" slot="activator" name="Medium">
                    <v-icon>fab fa-medium</v-icon>
                  </v-btn>
                </template>
                <span>Medium</span>
              </v-tooltip>
            </span>
            <span style="margin-left: 5px; margin-right: 5px; padding: 3px;">
              <v-tooltip bottom v-if="details.spotify">
                <template v-slot:activator="{ on }">
                  <v-btn color="#15171c" dark v-on="on" text icon :href="details.spotify" target="_blank" slot="activator" name="Spotify">
                    <v-icon>fab fa-spotify</v-icon>
                  </v-btn>
                </template>
                <span>Spotify</span>
              </v-tooltip>
            </span>
            <span style="margin-left: 5px; margin-right: 5px; padding: 3px;">
              <v-tooltip bottom v-if="details.fiveHundredPx">
                <template v-slot:activator="{ on }">
                  <v-btn color="#15171c" dark v-on="on" text icon :href="details.fiveHundredPx" target="_blank" slot="activator" name="500px">
                    <v-icon>fab fa-500px</v-icon>
                  </v-btn>
                </template>
                <span>500px</span>
              </v-tooltip>
            </span>
          </div>
          <br>
          <h1 class="font-weight-light mb-1" style="font-size: 24px;">
            {{ details.tagline }}
          </h1>
          <br><br>
          <v-btn to="/about" color="#580aff" style="margin-right: 12px!important; text-transform: capitalize; border-radius:5px; color:white" class="ma-0 elevation-1">
            About Me
          </v-btn>
          <v-btn to="/contact" rounded outlined color="#580aff" style="text-transform: capitalize; border-radius:5px; text-transform: capitalize; margin-left: 12px!important; margin-right: 12px!important;" class="ml-0" dark>
            Contact Me
          </v-btn>
          <v-btn target="_blank" v-if="details.resumeLink" :href="details.resumeLink" color="#580aff" style="margin-left: 12px!important; text-transform: capitalize; border-radius:5px; color:white">
            My Resume
          </v-btn>
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
      details: '',
    }
  },
  methods: {
    convertToMail(email){
      return "mailto:" + email
    }
  },
  firestore(){
    return{
      details: db.collection("details").doc("details")
    }
  }
}
</script>
