<template>
    <v-container>
        <v-layout row wrap justify-center align-center>
            <v-flex  xs12 sm5 pa-6 my-5>
                <p class="title grey--text darken-4--text text-xs-center" >Login</p>
                <v-card class="pa-4">
                <v-card-text >
                    <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation>

                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required>
                        </v-text-field>
                        
                        <v-text-field
                            v-model="password"
                            :append-icon="show1 ? 'visibility' : 'visibility_off'"
                            :rules="passRules"
                            :type="show1 ? 'text' : 'password'"
                            @click:append="show1 = !show1">
                        </v-text-field>

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
        </v-layout>
    </v-container>
</template>
<script>
export default {
    data(){
        return {
            valid: true,
            show1: false,
            email: '',
            emailRules:[
                v => !!v || "E-mail requerido.",
                v => /.+@.+.+/.test(v) || 'Ingresa un e-mail válido.'
            ],
            password:'',
            passRules:[
                v =>  !!v || 'Requerido.'
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
