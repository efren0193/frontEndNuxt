<template>
    <v-carousel 
        hide-delimiters
        :hide-controls="hidecontrols"
        :height="height">
        
        <v-carousel-item
            v-for="(item,i) in sliders"
            :key="i">
            <v-parallax 
                :src="'/images/'+item"
                :height="height">
                <v-layout
                    align-center
                    column
                    justify-center
                    style="background:rgba(0,0,0,0.3)">
                    <h1 class="display-2 font-weight-regular mb-3">{{captions[0]}}</h1>
                    <h4 class="subheading">{{captions[1]}}</h4>
                </v-layout>
            </v-parallax>
        </v-carousel-item>
    </v-carousel>
</template>
<script>
export default {
    props:['sliders', 'captions'],
    data(){
        return{
            height: 600,
            hidecontrols: false
        }
    },
    created(){
        if (this.sliders.length > 1 ? this.hidecontrols = false : this.hidecontrols = true);
    }
}
</script>
