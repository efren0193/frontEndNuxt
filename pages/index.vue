<template>
<div>

  <v-container >
    <!-- Init cards -->
    <h1 class="h1 grey--text darken-4--text text-sm-center">Explorar</h1>
    <v-layout
      row wrap
      justify-center
      align-center 
      pt-3>
      
      <v-flex xs12 sm6  pa-3>
        <v-card>
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">Clima</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-actions>
            
            <v-btn flat color="green darken-4"><NuxtLink to="/weather">Explorar</NuxtLink></v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 pa-3>
        <v-card>
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">Favoritos</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-actions>
            <v-btn flat color="green darken-4"><NuxtLink to="/favorites">Explorar</NuxtLink></v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-divider class="ma-3"></v-divider>
    </v-layout>
    <!-- End cards -->
    
  </v-container>
  </div>
</template>

<script>

export default {
}
</script>
