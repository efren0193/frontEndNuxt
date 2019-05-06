<template>
  <div>
     <carousel
      :sliders="sliders"
      :captions="captions"/>
    <v-layout>
      <v-flex text-xs-center>
        <blockquote class="blockquote">
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import Carousel from '~/components/Carousel.vue'
export default {
  components:{
    Carousel
  },
  data: () => ({
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
      sliders:[
        'culturas/slider.jpg'
      ],
      captions:[
        'Culturas'
      ]
    })
}
</script>

