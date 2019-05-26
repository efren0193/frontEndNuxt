<template>
  <div>
     <carousel
      :sliders="sliders"
      :captions="captions"/>
    
    <v-container >
      <v-layout
        row wrap
        justify-center
        align-center
        pt-3
      >
          <v-flex xs12>
            <v-card>
              <v-card-text>
                <v-layout pa-3 row wrap>
                  <v-flex xs12 sm6 text-xs-justify pa-3 >
                    <h6 class="title pb-3">¿Quiénes Somos?</h6>
                    <p class="body-1">
                      Un equipo de trabajo que desarrolla un proyecto con el nombre de <strong> Rincón de la Huasteca</strong>, para mostrar las riquezas de nuestra cultura que actualmente existe en nuestra región huasteca; principalmente en la zona rural del sureste del estado.
                    </p>
                    <v-divider class="my-3"></v-divider>
                  </v-flex>
                  <v-flex xs12 sm6 text-xs-justify pa-3 >
                    <h6 class="title pb-3">Objetivo</h6>
                    <p class="body-1">
                      Mostrar y rescatar las tradiciones y culturas de nuestra región.
                    </p>
                    <v-divider class="my-3"></v-divider>
                  </v-flex>
                  <v-flex xs12 sm6 text-xs-justify pa-3>
                    <h6 class="title pb-3">¿Porqué "Rincon de la Huasteca"?</h6>
                    <p class="body-1">
                      Se le nombró así por ubicarse en los límites del municipio de Tamazunchale y del estado de San Luis Potosí.
                    </p>
                    <v-divider class="my-3"></v-divider>
                  </v-flex>
                  <v-flex xs12 sm6 text-xs-justify pa-3>
                    <h6 class="title pb-3">Misión</h6>
                    <p class="body-1">
                      Permitir que la sociedad conozca nuestra cultura a través de diferentes medios de comunicación.
                    </p>
                    <v-divider class="my-3"></v-divider>
                  </v-flex>
                  <v-flex xs12 sm6 text-xs-justify pa-3>
                    
                  </v-flex>
                  <v-flex xs12 sm6 text-xs-justify pa-3>
                    <h6 class="title pb-3">Visión</h6>
                    <p class="body-1">
                      Crear conciencia en la sociedad en el rescate de nuestras culturas, además de contribuir en el desarrollo de nuevos talentos en esta zona.
                    </p>
                    <v-divider class="my-3"></v-divider>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import Carousel from '~/components/Carousel.vue'
export default {
  components:{
    Carousel
  },
  data(){
    return{
      sliders:[
        'slider/G0040721-1.jpg'
      ],
      captions:[
        'Nosotros'
      ]
    }
  }
}
</script>

