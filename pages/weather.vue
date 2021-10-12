<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="teal" dark>

          <v-toolbar-title>List Cities</v-toolbar-title>

          <v-spacer></v-spacer>

        </v-toolbar>
        <List :cities="cities" action="add"/>
        
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
        return {
            cities:{}
        }
    },
    mounted(){
        this.$axios
        .get('https://api.openweathermap.org/data/2.5/find?lat=21.18&lon=-98.86&cnt=10&units=metric&appid=da488f9b59703fa30d11f5269ec88e09')
        .then(response => 
        {
          this.cities = response.data.list
        })
        .catch(error => console.log(error))
        
    },
}
</script>