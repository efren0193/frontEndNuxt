<template>
  <v-app >
    <v-navigation-drawer
      v-model="drawer"
      fixed
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
     <v-responsive dark>
      <v-toolbar
        :clipped-right="clipped"
        fixed
        app
      >
        <v-img aspect-ratio="2" :src="logo" 
        to="/">
        
        </v-img>

        <v-spacer />
        <v-toolbar-items class="hidden-xs-only" 
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact> 
          <nuxt-link :to="item.to" class="nuxt-link-active subheading font-weight-regular" exact>{{item.title}}</nuxt-link>
        </v-toolbar-items>
        <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
      </v-toolbar>
     </v-responsive>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer>
    <v-container>
      <v-layout row wrap align-center pt-3>
        <v-flex  xs12 >
          <v-layout row wrap  pa-0>
            <v-flex xs12  pa-1 text-xs-center>
              <span  class="grey--text caption">&copy; Copyright Efrenhz</span>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'Weather',
          to: '/weather'
        },
        {
          title: 'Favorites',
          to: '/favorites'
        },
        
      ],
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg',
      offsetTop: 0,
      toolbarShadow: true
    }
  },
}
</script>

