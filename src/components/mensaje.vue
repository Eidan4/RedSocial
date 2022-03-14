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
    <div class="rectangulo-mensaje">
        <div class="chat-mensaje">
            <div>
                <h1 class="titulo-mensaje">Mensaje</h1>
                <a href="" class="texto-mensaje"><i class="fa fa-users" id="font"></i>Recibidos</a><br/>
                <a href="" class="texto-mensaje"><i class="fa fa-users"></i>Enviados</a><br>
            </div>
        </div>
    </div>
</template>

<script>
 

</script>

<style>
    .rectangulo-mensaje{
       border: 1px solid black;
       width:94%;
       height:702px;
       background: white;
        margin: 50px;
    }

    .chat-mensaje{
        border-right: 1px solid black;
        height:702px;
        width:35%;
    }

    .texto-mensaje{
        display: flex;
        margin-left: 50px;
        text-decoration: none;
        font-size: 40px;
        color: black;
        margin-bottom: 40px;
        
    }

    .titulo-mensaje{
        margin-bottom: 60px;
        text-align: center;
        font-size: 45px;
    }

   .fa-users::before{
       margin-right: 40px;
       margin-top: 10px;
       font-size: 50px;
   }


</style>