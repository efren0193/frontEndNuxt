<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      class="hidden-sm-and-up"
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
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
        class="transparent"
      >
        <v-img :src="logo" 
        max-width="125px"
        class="mt-4"
        ></v-img>

        <v-spacer />
        <v-toolbar-items class="hidden-xs-only mt-4" 
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact> 
          <nuxt-link :to="item.to" class="nuxt-link-active subheading font-weight-regular" exact>{{item.title}}</nuxt-link>
        </v-toolbar-items>
        <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-sm-and-up mt-4"></v-toolbar-side-icon>
      </v-toolbar>
     </v-responsive>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer
      
    >
      <span>&copy; 2019</span>
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
          title: 'Inicio',
          to: '/'
        },
        {
          title: 'Nosotros',
          to: '/nosotros'
        },
        {
          title: 'Culturas',
          to: '/cultura'
        },
        {
          title: 'Atractivos',
          to: '/atractivo'
        },
        {
          title: 'Contacto',
          to: '/contacto'
        }
      ],
      logo: '/images/logo.png'
    }
  }
}
</script>

