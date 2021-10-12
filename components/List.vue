<template>
  <v-list>
          <v-list-group
            v-for="item in cities"
            :key="item.id"
            no-action
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-chip
            class="ma-2"
            color="red"
            text-color="white"
          >
            Clouds:{{item.clouds}}
          </v-chip>
          <v-chip
            class="ma-2"
            color="primary"
            text-color="white"
          >
            Lat:{{item.coord.lat}}, Lon: {{item.coord.lon}}
          </v-chip>
          <v-chip
            class="ma-2"
            color="primary"
            text-color="white"
          >
            Wind speed: {{item.wind.speed}}, Deg: {{item.wind.deg}}
          </v-chip>
          
          <br>
          Main:
          <pre>{{item.main}}</pre>
          Weather:
          <pre>{{item.weather[0]}}</pre>
          <br>
          {{(action ==='add') ? 'Add favorite:' : 'Remove favorite'}}
          <v-btn v-if="action == 'add'" fab dark small color="pink" @click="addFavorite(item)">
            <v-icon dark>favorite</v-icon>
          </v-btn>
          <v-btn v-if="action == 'del'" fab dark small color="pink" @click="removeFavorite(item)">
            <v-icon dark>favorite</v-icon>
          </v-btn>
          </v-list-group>
        </v-list>
</template>
<script>
export default {
  props:['cities', 'action'],
  methods: {
    addFavorite(e){
      let citiArr =  JSON.parse(localStorage.getItem('cities')) || [];
      citiArr.push(e);
      localStorage.setItem('cities', JSON.stringify(citiArr));
      
    },
    removeFavorite(e){
      let citiArr =  JSON.parse(localStorage.getItem('cities'))
      let newCiti = []
      citiArr.forEach(v => {
        if(v.id !== e.id){
          newCiti.push(v)
        }
      })
      console.log(newCiti)
      localStorage.setItem('cities', JSON.stringify(newCiti));
      //localStorage.removeItem(e.id)
    }
  }
}
</script>