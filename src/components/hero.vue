<template>
  <v-app class="white home">
    <v-container>
      <v-layout
        text-center
        wrap
      >
        <v-flex xs6 style="margin-top: 100px;">
          <center>
            <v-img
              style="border-radius: 100%;"
              :src="require('@/assets/images/prof.jpeg')"
              :lazy-src="require('@/assets/images/prof.jpeg')"
              width="64%">
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

        <v-flex xs-6 style="margin-top: 100px; padding-top: 70px; text-align: left;">
          <h1 class="display-1 font-weight-light mb-3">
            Hiya There!
          </h1>
          <h1 class="display-2 font-weight-light mb-3">
            This is <span style="color: #580aff;">{{ profileJson.name }}</span>.
          </h1>
          <br>
          <div class="icon-row">
            <span class="icon-holder" v-for="(item,i) in profileJson.socials" :key="i" style="margin-left: 8px; margin-right: 8px; padding: 6px;">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn color="#15171c" dark v-on="on" text icon :href="item.link" target="_blank" slot="activator" :name="item.name">
                    <v-icon>{{item.icon}}</v-icon>
                  </v-btn>
                </template>
                <span>{{ item.name }}</span>
              </v-tooltip>
            </span>
          </div>
          <br>
          <h1 class="font-weight-light mb-1" style="font-size: 24px;">
            {{ profileJson.tagline }}
          </h1>
        </v-flex>
      </v-layout>

    </v-container>
  </v-app>
</template>

<script>
import profileDetailsJson from "../assets/data/profile.json";
export default{
  data(){
    return {
      profileJson: profileDetailsJson
    }
  }
}
</script>
