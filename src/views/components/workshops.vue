<template>
  <v-app class="workshops">
    <v-container>
      
      <v-layout
        text-center
        wrap
      >
        <v-flex xs-6 style="margin-top: 100px; padding-top: 70px; text-align: left;">
          <h1 class="display-2 font-weight-light mb-3">
            What I <span style="color: #580aff;">speak on</span>.
          </h1>
          <h1 class="font-weight-light mb-1" style="font-size: 24px;">
            {{ content.workshopContent }}
          </h1>
        </v-flex>
      </v-layout>

        <v-flex v-for="(item, i) in workshops" :key="i" xs-6 style="padding-top: 40px; padding-bottom: 20px; text-align: left;">
            <h3 class="display-1 font-weight-light">
            {{ i+1 }}. <a style="text-decoration:none!important;"
              :name="item.title"
              :href="convertToRelUrl(item.id)">
                <span style="color: #580aff;">{{ item.title }}</span>
              </a>
            </h3>
            <h1 class="font-weight-light mb-3" style="font-size: 22px;">
            {{ item.date | dateFilter }}
            </h1>
        </v-flex>

    </v-container>
  </v-app>
</template>

<script>
import { db } from '../../firebase'
export default{
  data(){
    return {
      workshops: '',
      content: ''
    }
  },
  methods: {
    convertToRelUrl(key){
      return "/blog/" + key + "/"
    }
  },
  firestore(){
    return {
      workshops: db.collection("blogs").where("workshop", '==', "true"),
      content: db.collection("details").doc("content")
    }
  },
  filters: {
    dateFilter: function(value){
      // var tempVals = value.split('-')
      // var tempDate = tempVals[2] + "-" + tempVals[1] + "-" +tempVals[0]
      const date = new Date(value)
      return date.toLocaleString(['en-US'], {month: 'short', day: '2-digit', year: 'numeric'})
    }
  }
}
</script>
