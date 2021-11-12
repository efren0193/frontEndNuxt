<template>
    <div>
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
            <v-icon dark>delete</v-icon>
          </v-btn>

          <v-snackbar
            v-model="snackbar"
            >
            {{ text }}
        </v-snackbar>
    </div>
</template>

<script>
export default {
    props:['item', 'action'],
    data:() => ({
        snackbar: false,
        text:'',
    }),
    methods: {
        addFavorite(e){
            let citiArr =  JSON.parse(localStorage.getItem('cities')) || [];
            citiArr.push(e);
            //compare if exist
            const result = Array.from(new Set(citiArr.map(c => c.id)))
                            .map(id => {
                                return citiArr.find(c => c.id === id)
                            })

            localStorage.setItem('cities', JSON.stringify(result));
            this.snackbar = true
            this.text = 'Has agregado '+ e.name + ' a favoritos'
        
        },
        removeFavorite(e){
            let citiArr =  JSON.parse(localStorage.getItem('cities'))
            let newCiti = []
            citiArr.forEach(v => {
                if(v.id !== e.id){
                newCiti.push(v)
                }
            })
            localStorage.setItem('cities', JSON.stringify(newCiti));
            this.snackbar = true
            this.text = 'Has eliminado '+ e.name + ' de favoritos'
        }
  }
}
</script>