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

          <Detail :item="item" :action="action"/>

      </v-list-group>
    </v-list>
</template>
<script>
import Detail from '~/components/WeatherDetail.vue'
export default {
  components:{
    Detail
  },
  props:['cities', 'action'],
}
</script>