<template>
    <div>
     <carousel
      :sliders="sliders"
      :captions="captions"/>
    <v-container 
    grid-list-md
    >
        <v-layout row wrap>
        <v-flex xs12 pb-4>
            <GmapMap v-bind:center="center" v-bind:map-type-id="mapTypeId" v-bind:zoom="16" >
                <GmapMarker
                    v-for="(item, index) in markers"
                    v-bind:key="index"
                    v-bind:position="item.position"
                    @click="center=item.position"
                />
            </GmapMap>
        </v-flex>
        <v-flex  xs12 md6>
            <p class="font-weight-bold subheading grey--text" >Mándanos un mensaje</p>
            <v-card class="pa-1">
               <v-card-text>
                   <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation>

                    <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Nombre"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    ></v-text-field>
                    
                    <v-text-field
                    v-model="phone"
                    :rules="phoneRules"
                    label="Teléfono"
                    required
                    mask="(###) ### - ####"
                    ></v-text-field>
                    
                    <v-textarea
                    v-model="message"
                    :rules="messageRules"
                    label="Mensaje"
                    required
                    :counter="200"
                    >

                    </v-textarea>

                    <v-btn
                    :disabled="!valid"
                    color="green darken-4 white--text"
                    @click="validate"
                    >
                    Enviar
                    </v-btn>
                </v-form>
               </v-card-text>
           </v-card>
        </v-flex>
        <v-flex xs12 md6 d-block>
            <p class="font-weight-bold subheading grey--text" >Síguenos en nuestras redes sociales</p>
            <v-card class="mb-3">
                <v-card-text>
                    <!-- <v-container fluid > -->
                        <v-layout row pa-0>
                            <v-flex sm6 >
                                <a href="https://www.facebook.com/rincondelahuasteca" target="_blank"> <v-img src="/images/fb.png" width="50px" class="right"></v-img> </a>
                            </v-flex>
                            <v-flex sm6>
                                <a href="https://www.youtube.com/channel/UCEGdf4lBEK9IYznS8DrIhTQ" target="_blank"> <v-img src="/images/yt.png" width="50px"></v-img> </a>
                            </v-flex>
                        </v-layout>
                    <!-- </v-container> -->
                </v-card-text>
            </v-card>
           
           <p class="font-weight-bold subheading grey--text" >Información de contacto</p>
           <v-card>
               <v-card-text>
                    <v-flex>
                        
                        <blockquote class="blockquote subheading pl-2 pb-2">
                            <v-icon color="green darken-4">room</v-icon> Plazeta #3, Zona Centro, Santiago Tamazunchale, S.L.P. MX
                        </blockquote>
                    </v-flex>
                    <v-flex>
                        <blockquote class="blockquote subheading pl-2 pb-2">
                            <v-icon color="green darken-4">email</v-icon>
                        contacto@rincondelahuasteca.com
                        </blockquote>
                    </v-flex>
                    <v-flex>
                        <blockquote class="blockquote subheading pl-2 pb-2">
                            <v-icon color="green darken-4">phone</v-icon>
                        (771) 703 - 7454
                        </blockquote>
                    </v-flex>
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
                'slider/DSC_0535-1.jpg'
            ],
            captions:[
                'Contacto'
            ],
            center: { lat: 21.205317, lng: -98.863982 },
            mapTypeId: "roadmap",
            markers: [
                { position: { lat: 21.205317, lng: -98.863982 } }
            ],
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Nombre requerido',
                
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail requerido.',
                v => /.+@.+.+/.test(v) || 'Ingresa un e-mail válido.'
            ],
            phone:'',
            phoneRules:[
                v => !!v || 'Teléfono requerido.',
                v => /.[0-9]{9,10}/.test(v) || 'Ingresa un teléfono válido.'
            ],
            message:'',
            messageRules:[
                v => !!v || 'Mensaje requerido,',
                v => (v && v.length <= 200) || 'Solo puedes ingresar 200 caracteres.'
            ]
        }
    },
    methods:{
        validate () {
            if (this.$refs.form.validate()) {
                this.snackbar = true
            }
        },
        reset () {
            this.$refs.form.reset()
        },
    }
}
</script>
<style scoped>
    .vue-map-container {
         height: 300px;
        width: auto; 
        }
</style>
