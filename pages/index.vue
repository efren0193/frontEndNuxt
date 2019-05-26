<template>
<div>
  <carousel
  :sliders="sliders"
  :captions="captions"/>
  <v-container >
    <!-- Init four cards -->
    <v-layout
      row wrap
      justify-center
      align-center 
      pt-3>
      <v-flex xs12 sm6 md3 pa-3 v-for="item in 4" :key="item.id">
        <v-card>
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">Top 10 Australian beaches</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <span class="grey--text">Number 10</span><br>
              <span>Whitehaven Beach</span><br>
              <span>Whitsunday Island, Whitsunday Islands</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="green darken-4">Share</v-btn>
            <v-btn flat color="green darken-4">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-divider class="ma-3"></v-divider>
    </v-layout>
    <!-- End four cards -->
    <!-- Init news section -->
    <v-layout
    row wrap
      justify-center
      align-center
      pa-3 fill-height>
      <!-- Init main card for news -->
      <v-flex xs12  sm7  mb-2 shrink align-self-center> 
        <v-card >
          <v-img
            class="white--text"
            height="250px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">Top 10 Australian beaches</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <span class="grey--text">Number 10</span><br>
              <span>Whitehaven Beach</span><br>
              <span>Whitsunday Island, Whitsunday Islands</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="green darken-4" >Share</v-btn>
            <v-btn flat color="green darken-4">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <!-- End main card for news -->
      <!-- Init mini cards for news -->
      <v-flex xs12 sm5 grow align-self-center>
        <v-list class="list-news-home pa-0" >
          <v-list-tile
          v-for="(item, key) in 3"
          :key="key"
          class="pb-2">
            <v-list-tile-content>
              <v-card >
                <v-divider class="mb-2 hidden-xs-only grey lighten-3" v-if="key == 0"></v-divider>
                <v-card-text class="pt-1 "> 
                  <v-layout row wrap pa-0 justify-center align-center>
                  <v-flex xs4 sm12 md4>
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                      height="100px"
                      contain
                    ></v-img>
                  </v-flex>
                  <v-flex xs8 hidden-sm-only pa-2>
                    <blockquote class="subheading">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </blockquote>
                    <em class="grey--text caption">Number 10</em>
                  </v-flex>
                </v-layout> 
                </v-card-text>
                <v-divider class="my-0 grey lighten-3"></v-divider>
              </v-card>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
      <v-divider class="mt-4"></v-divider>
      <!-- End mini cards for news -->
    </v-layout>
    <!-- End news section -->
    <!-- Init attractive section -->
    <v-layout pa-0 row wrap
      justify-center
      align-center>
      <v-flex v-for="item in 3" :key="item.id" text-xs-center pa-3 xs12 sm4>
        <v-card>
          <v-card-text>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" class="white--text">
              <v-container fill-height  style="background: rgba(0,0,0,0.3)">
                <v-layout fill-height >
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">Top 10 Australian beaches</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- End attractive section -->
  </v-container>
  </div>
</template>

<script>
import Carousel from '~/components/Carousel.vue'
import { mapMutations } from 'vuex'

export default {
  components: {
    Carousel
  },
  data(){
    return{
      sliders:[
                'slider/d517fb04e5b2ca2b0f9925b43b5774e7.jpg',
                'slider/acfb9ffccac362cbf68b0a770fc33b99.jpg',
                'slider/a6dcc0c218f62de1227707632322d788.jpg',
            ],
      captions:[
        'Vuetify.js',
        'Build your application today!'
      ],
      
    }
  },
  methods:{
  },
}
</script>
