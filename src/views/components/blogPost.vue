<template>
  <v-app class="workshops">
    <v-container>

        <v-layout text-center wrap>
            <v-flex xs-10 style="margin-top: 100px; padding-top: 70px; text-align: left;">
            
            <h1 class="display-2 font-weight-light mb-1">
                <span style="color: #580aff;">{{ blogContent.title }}</span>
            </h1>
            <br><br>

            <p class="font-weight-light mb-3" style="font-size: 24px;">
                <span>{{ blogContent.date | dateFilter }}</span>
            </p>
            <br><br>

            <center>
                <v-img
                :src="blogContent.imgURL"
                :lazy-src="blogContent.imgURL"
                v-if="blogContent.imgURL"
                width="600px">
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

            <br><br>

            <p class="font-weight-light" style="font-size: 20px;">
                {{ blogContent.description | structureData }}
            </p>
            <br><br>

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
      blogContent: ''
    }
  },
  firestore(){
      return {
          blogContent: db.collection("blogs").doc(this.$route.params.key)
      }
  },
  filters: {
        structureData: function(val){
            return val
        },
        dateFilter: (value)=>{
            var tempVals = value.split('/')
            var tempDate = tempVals[2] + "-" + tempVals[1] + "-" +tempVals[0]
            const date = new Date(tempDate)
            return date.toLocaleString(['en-US'], {month: 'short', day: '2-digit', year: 'numeric'})
        }
  }
}
</script>
