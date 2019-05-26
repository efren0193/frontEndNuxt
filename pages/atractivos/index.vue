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
  data(){
    return{
      sliders:[
        'atractivos/slider.jpg'
      ],
      captions:[
        'Atractivos'
      ]
    }
  }
}
</script>

