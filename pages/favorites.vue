<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="teal" dark>

          <v-toolbar-title>List Favorites</v-toolbar-title>

          <v-spacer></v-spacer>

        </v-toolbar>
        <List :cities="cities" action="del"/>
        
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import List from '~/components/List.vue'
export default {
  components:{
    List
  },
  data(){
    return{
      cities: {}
    }
  },
  mounted(){
    this.cities = JSON.parse(localStorage.getItem('cities'))
  }
}
</script>