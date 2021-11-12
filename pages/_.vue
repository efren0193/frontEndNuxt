<template>
    <div class="error">
        <h1>404</h1>
        <div class="warning">
            <h2>Página no encontrada</h2>
            <p>Lo sentimos pero no hemos podido encontrar la página solicitada, regresa a <NuxtLink to="/">Inicio</NuxtLink></p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
    .error
        text-align center
        padding 15%
        height 100vh
        h1 
            font-size 36px
        .warning 
            height 50vh !important
            padding 10%
            h2 
                font-size 28px
            p 
                font-size 18px
</style>