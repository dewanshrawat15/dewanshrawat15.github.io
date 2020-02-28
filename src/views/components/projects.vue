<template>
  <v-app class="white work">
    <v-container>
      <v-layout
        text-center
        wrap
      >
        <v-flex xs11 style="margin-top: 100px; padding-top: 70px; text-align: left; margin-bottom: 60px;">
          <h1 class="display-2 font-weight-light mb-3">
            What I've <span style="color: #580aff;">built</span>.
          </h1>
          <p class="font-weight-light mb-1" style="font-size: 20px;">
            {{ workJson.projectsContent }}
          </p>
        </v-flex>
      </v-layout>

      <v-layout
        text-center
        wrap
        style="margin-bottom: 80px;"
        v-if="isNotMobile()"
      >
        <v-flex xs6 v-for="(item, i) in workJson.portfolioItems" :key="i" style="text-align: left;" :id="item.id">
          <div style="background: #f8f8f8; padding-top: 40px; padding-bottom: 20px; margin-top: 10px; margin-bottom: 10px; margin-left: 12px; margin-right: 12px; padding-left: 14px; padding-right: 14px;">
            <center><h2>{{ item.title }}</h2></center>
            <br>
            <!-- <v-img :src="item.imageURL" :lazy-src="item.imageURL"></v-img>
            <br> -->
            <p>{{ item.shortDescription }}</p>
            <br>
            <center>
                <span class="icon-holder" v-for="(work ,j) in item.links" :key="j" style="margin-left: 8px; margin-right: 8px; padding: 6px;">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                    <v-btn color="#15171c" dark v-on="on" text icon :href="work.link" target="_blank" slot="activator" :name="work.name">
                        <v-icon>{{work.icon}}</v-icon>
                    </v-btn>
                    </template>
                    <span>{{ work.name }}</span>
                </v-tooltip>
                </span>
            </center>
          </div>
        </v-flex>
      </v-layout>
      <v-layout
        v-if="isMobile()"
        text-center
        wrap
        style="margin-bottom: 80px;"
      >
        <v-flex xs10 offset-1 v-for="(item, i) in workJson.portfolioItems" :key="i" style="text-align: left;" :id="item.id">
          <div style="background: #f8f8f8; padding-top: 40px; padding-bottom: 20px; margin-top: 10px; margin-bottom: 10px; margin-left: 12px; margin-right: 12px; padding-left: 14px; padding-right: 14px;">
            <center><h2>{{ item.title }}</h2></center>
            <br>
            <!-- <v-img :src="item.imageURL" :lazy-src="item.imageURL"></v-img>
            <br> -->
            <p>{{ item.shortDescription }}</p>
            <br>
            <center>
                <span class="icon-holder" v-for="(work ,j) in item.links" :key="j" style="margin-left: 8px; margin-right: 8px; padding: 6px;">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                    <v-btn color="#15171c" dark v-on="on" text icon :href="work.link" target="_blank" slot="activator" :name="work.name">
                        <v-icon>{{work.icon}}</v-icon>
                    </v-btn>
                    </template>
                    <span>{{ work.name }}</span>
                </v-tooltip>
                </span>
            </center>
          </div>
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
  },
  methods: {
    isMobile: function() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    },
    isNotMobile: function() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>
