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
              :src="details.profileImage"
              :lazy-src="details.profileImage"
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
            {{ content.aboutText }}
          </p>
          <br><br>
          <v-btn target="_blank" v-if="details.resumeLink.length > 0" :href="details.resumeLink" color="#580aff" style="margin-right: 12px!important; text-transform: capitalize; border-radius:5px; color:white">
            My Resume
          </v-btn>
          &nbsp;
          <v-btn target="_blank" v-if="details.github.length > 0" :href="details.github" rounded outlined color="#580aff" style="margin-left: 12px!important; text-transform: capitalize; border-radius:5px; text-transform: capitalize;" dark>
            My Github
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
      content: '',
      details: ''
    }
  },
  firestore(){
    return {
      content: db.collection("details").doc("content"),
      details: db.collection("details").doc("details")
    }
  }
}
</script>
