<template>
  <v-app class="contactDetails">
    <v-container>
      
      <v-layout
        text-center
        wrap
      >
        <v-flex xs-6 style="margin-top: 100px; padding-top: 70px; text-align: left; margin-bottom: 60px;">
          <h1 class="display-2 font-weight-light mb-3">
            Get in  <span style="color: #580aff;">touch</span>.
          </h1>
          <p class="font-weight-light mb-1" style="font-size: 24px;">
            {{ content.contactContent }}
          </p>

        <br><br>

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
          
        <br><br>
        
        <h1 class="font-weight-light mb-1" style="font-size: 24px;">
        {{ content.footerText }} <a style="text-decoration:none!important;" target="_blank" href="/"><span style="color: #580aff;">{{ details.name }}</span></a>.
        </h1>

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
      content: ''
    }
  },
  firestore(){
    return {
      details: db.collection("details").doc("details"),
      content: db.collection("details").doc("content")
    }
  }
}
</script>
