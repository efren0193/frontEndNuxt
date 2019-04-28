<template>
    <v-carousel hide-delimiters>
        <v-carousel-item
        v-for="(item,i) in sliders"
        :key="i"
        src=""
        >
        <v-overlay 
            absolute
            color="error"
        >
            <v-parallax :src="'/images/slider/'+item"></v-parallax>
        </v-overlay>
        </v-carousel-item>
    </v-carousel>
</template>
<script>
export default {
    data(){
        return{
            sliders:[
                'd517fb04e5b2ca2b0f9925b43b5774e7.jpg',
                'acfb9ffccac362cbf68b0a770fc33b99.jpg',
                'a6dcc0c218f62de1227707632322d788.jpg',
            ],
        }
    }
}
</script>
