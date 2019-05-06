<template>
  <v-app >
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
        :class="{'transparented':toolbarShadow, 'scrolled':!toolbarShadow}"
      >
        <v-img :src="logo" 
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
    <v-content
    v-scroll="onScroll"
    >
      <nuxt />
      <v-fab-transition>
      <v-btn
          v-show="!toolbarShadow" 
          dark
          fab
          bottom
          right
          fixed
          color="green darken-4"
          @click="$vuetify.goTo(0, '')">
        <v-icon dark>expand_less</v-icon>
      </v-btn>
      </v-fab-transition>
    </v-content>
    <v-footer>
    <v-container>
      <v-layout row wrap align-center pt-3>
        <v-flex xs6 offset-xs3  sm4 offset-sm0 >
          <v-layout row pa-0>
            <v-flex xs6>
              <v-list >
                <v-list-tile
                  v-for="(item, i) in items"
                  v-if="i < 3"
                  :key="i"
                  :to="item.to"
                  router
                  exact>
                  <v-list-tile-content>
                    <v-list-tile-title v-text="item.title" class="text-xs-center text-sm-left"/>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-flex>
            <v-flex xs6>
              <v-list >
                <v-list-tile
                  v-for="(item, i) in items"
                  v-if="i >= 3"
                  :key="i"
                  :to="item.to"
                  router
                  exact>
                  <v-list-tile-content>
                    <v-list-tile-title v-text="item.title" class="text-xs-center text-sm-left"/>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12  sm4 pa-4>
          <v-layout row pa-0>
              <v-flex sm6 >
                  <a href="https://www.facebook.com/rincondelahuasteca" target="_blank" class="v-social right" > <v-img src="/images/fb.png" width="35px" ></v-img> </a>
              </v-flex>
              <v-flex sm6>
                  <a href="https://www.youtube.com/channel/UCEGdf4lBEK9IYznS8DrIhTQ" target="_blank" class="v-social"> <v-img src="/images/yt.png" width="35px"></v-img> </a>
              </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12  sm4 text-xs-center text-sm-right>
           <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" class="col-md-4">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="ABYU4XT4GDM5U" />
              <input type="image" src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
              <!-- <img alt="" border="0" src="https://www.paypal.com/es_MX/i/scr/pixel.gif" width="0" height="1" /> -->
            </form>
        </v-flex>
        <v-divider class="my-3"></v-divider>
        <v-flex  xs12 >
          <v-layout row wrap  pa-0>
            <v-flex xs12 sm6  pa-1 order-xs1 order-sm-2 text-xs-center text-sm-left>
              <span  class="grey--text caption">&copy; 2019 Rincón de la Huasteca</span>
            </v-flex>
            <v-flex xs12 sm6  pa-1 order-xs-2 order-sm-1 text-xs-center text-sm-right>
              <nuxt-link class="grey--text caption" to="privacidad">
                Aviso de privacidad
              </nuxt-link>
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
          title: 'Inicio',
          to: '/'
        },
        {
          title: 'Nosotros',
          to: '/nosotros'
        },
        {
          title: 'Culturas',
          to: '/culturas'
        },
        {
          title: 'Atractivos',
          to: '/atractivos'
        },
        {
          title: 'Contacto',
          to: '/contacto'
        },
        {
          title: 'Login',
          to: '/login'
        }
      ],
      logo: '/images/logo.png',
      offsetTop: 0,
      toolbarShadow: true
    }
  },
  methods:{
    onScroll (e) {
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
        console.log(this.existCarousel)
        if (!this.existCarousel) {
          this.toolbarShadow = false;
        }else{
          if(this.offsetTop > 525){
            this.toolbarShadow = false;
          }else{
            this.toolbarShadow = true;
          }
        }
      },
  },
  mounted(){
    this.onScroll()
  },
  computed:{
    existCarousel(){
      return this.$store.state.existCar
    }
  },
}
</script>

