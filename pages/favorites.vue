<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="teal" dark>

          <v-toolbar-title>Favoritos</v-toolbar-title>
          <v-text-field
          v-model="search"
          class="mx-4"
          flat
          label="Buscar favoritos"
          solo-inverted
        ></v-text-field>
          <v-spacer></v-spacer>

        </v-toolbar>
        <List :cities="cities" action="del"/>
        
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import List from '~/components/WeatherList.vue'
export default {
  components:{
    List
  },
  data:() => ({
      search: ''
  }),
  computed:{
    cities(){
      const all = JSON.parse(localStorage.getItem('cities'))
      if(this.search){
        const filter = all.filter(el => {
          return el.name.toLowerCase().includes(this.search.toLowerCase())
        })
        return filter
      }
      return all
    }
  }
}
</script>