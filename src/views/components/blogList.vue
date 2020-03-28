<template>
  <v-app class="blog white">
    <v-container>

        <v-layout>
            <v-flex xs-10 style="margin-top: 100px; padding-top: 70px; text-align: left;">
                <h2 class="display-2">
                    Blog Posts
                </h2>
            </v-flex>
        </v-layout>
        <br><br><br>
        <v-layout v-if="blogsList.length > 0" text-center wrap>
            <v-flex xs12 sm6 md4 lg4  xs6 v-for="(item, i) in blogsList" :key="i" style="text-align: left;" :id="item.id">
                <v-list grey two-line subheader>
                    <v-list-item class="grey lighten-4" style="margin: 6px;">
                
                        <v-list-item-avatar>
                            <v-img
                                v-if="item.imgURL"
                                :src="item.imgURL"
                                :lazy-src="item.imgURL"
                            ></v-img>
                            <v-icon v-else class="grey lighten-2" style="font-size: 18px;">
                                fa fa-user
                            </v-icon>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                            <v-list-item-subtitle v-text="item.description"></v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-btn icon :href="convertToRelUrl(item.id)">
                                <v-icon color="grey">fa fa-chevron-right</v-icon>
                            </v-btn>
                        </v-list-item-action>
                
                    </v-list-item>
                </v-list>
            </v-flex>
      </v-layout>
      <v-layout v-else>
          <v-flex xs8>
              <h1 class="display-3 font-weight-light">No posts found</h1>
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
      blogsList: ''
    }
  },
  firestore(){
      return {
          blogsList: db.collection("blogs")
      }
  },
  methods: {
    convertToRelUrl(key){
      return "/blog/" + key + "/"
    }
  },
  filters: {
      structureTitle: function(val){
          return val
      },
      summary: function(val, num){
          return val.substring(0, num)
      }
  }
}
</script>
