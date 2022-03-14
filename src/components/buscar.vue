<template>
    <div class="menu-cuenta">
        <div class="titulo-cuenta">
            <p class="texto-cuenta">Red Tic</p>
        </div>
        
        <div class="links-cuenta">
            <router-link to="/cuenta" class="font" ><i class="fa fa-home"></i></router-link>

            <router-link to="/buscar" class="font" ><i class="fa fa-search"></i></router-link>

            <router-link to="/mensaje" class="font" ><i class="fa fa-paper-plane"></i></router-link>
            
            <button  class="cerrar-cuenta" v-if="is_auth" v-on:click="logOut">Cerrar Sesión</button>
        </div>
    </div>
</template>
<script>

</script>
