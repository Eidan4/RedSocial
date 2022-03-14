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

    <div class="inicio-cuenta">
        <div class="circulo-cuenta">
            <div class="imagen-cuenta">
                <div class="foto-cuenta"><i class="fa fa-user"></i></div>
            </div>
        </div>
        <div class="text-cuenta" >
            <h2>Bienvenido Usuario</h2>
        </div>
        
        <div class="seleccion-cuenta">
            <div class="flex-texto">
                <h3>Inicio</h3>
                <h3>Editar Cuenta</h3>
            </div>
        </div>
        <div class="perfil-inicio">
            <h1>Bienvenido a la red Social</h1>
            <h1>Red Tic</h1>
           
            
        </div>
         <router-view
            v-on:logOut="logOut"
        >
      </router-view>
    </div>

</template>

<script>

import axios from "axios";
import jwt_decode from "jwt-decode"

  export default {
  name: "cuenta",

  data: function () {
    return {
      is_auth: false,
    };
  },

  components: {},

  methods: {

    verifyAuth: function () {
      this.is_auth = localStorage.getItem("isAuth") || false;

      if (this.is_auth == false) 
        this.$router.push({ name: "Login" });
      else
       this.$router.push({ name: "cuenta" });
    },
    completedLogIn: function (data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("Autenticación Exitosa");
      this.verifyAuth();
    },
    
    loadHome: function () {
      this.$router.push({ name: "cuenta" });
    },

    /*loadAccount: function () {
      this.$router.push({ name: "account" });
    },*/

    logOut: function () {
      localStorage.clear();
      alert("Sesión Cerrada");
      this.verifyAuth();
    },
  },

  created: function () {
    this.verifyAuth();
  }

};


</script>

<style>
*{
    margin: 0px;
}



.menu-cuenta{
    height: 70px;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
}

.perfil-cuenta{
    display: flex;
    width: 44px;
    height: 44px;
    border: 1px solid black;
    border-radius: 100px;

}

.titulo-cuenta{
    margin-left: 30px;
    font-size: 18px;
    margin-top: 5px;
}

.alado{
    margin-left: 20px;
}

.links-cuenta{
    margin-right: 30px;
}

.texto-cuenta{
    margin-top: 8px;
    margin-bottom: 0px;
    font-size: 40px;
}

.buscar-cuenta{
    margin-top: 15px;
    margin-right: 20px;
}

.input-cuenta{
    width: 500px;
    height: 30px;
    margin-left: 170px;
    border-radius: 20px;
}

.links-cuenta{
    margin-top: 5px;
    font-size: 42px;
    display: flex;
    margin-right: 30px;
}

.font{
    margin-left: 10px;
    margin-right: 40px;
    color: black;
    font-size: 50px;
}

.img-cuenta{
    border-radius: 100px;
}

.inicio-cuenta{
    width: 97%;
    height: 500px;
    margin-top: 120px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
    border: 1px solid black;
}

.circulo-cuenta{
    display: flex;
    justify-content: center;
}

.foto-cuenta{
    display: flex;
    width: 100px;
    height: 100px;
    border: 1px solid black;
    border-radius: 100px;
    margin-top:-55px;
    margin-bottom: 10px;
    background-color: white;
}

.text-cuenta{
    text-align: center;
    margin-top: 10px;
}


.seleccion-cuenta{
    margin-top: 15px;
    border: 1px solid black;
    height: 40px;
    border-left: white;
    border-right: white;
}

.flex-texto{
    margin-left: 300px;
    margin-right: 300px;
    display: flex;
    justify-content: space-between;
    font-size: 25px;
    margin-top: 2px;
}

.perfil-inicio{
    text-align: center;
    margin-top: 100px;
}

.cerrar-cuenta{
    height: 60px;
    border-radius: 5px;
    background:white;
    font-size:20px;
}

.fa-user::before{
    font-size: 94px;
    margin-top: 15px;
    margin-left: 16px;
}
</style>