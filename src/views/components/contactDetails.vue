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
            {{ workJson.contactContent }}
          </p>

        <br><br>

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
          
        <br><br>
        
        <h1 class="font-weight-light mb-1" style="font-size: 24px;">
        {{ workJson.footerText }} <a style="text-decoration:none!important;" target="_blank" href="/"><span style="color: #580aff;">{{ profileJson.name }}</span></a>.
        </h1>

        </v-flex>
      </v-layout>

    </v-container>
  </v-app>
</template>

<script>
import workDataJson from "../../assets/data/work.json";
import profileDetailsJson from "../../assets/data/profile.json";
export default{
  data(){
    return {
      workJson: workDataJson,
      profileJson: profileDetailsJson
    }
  }
}
</script>
