<template>
    <body>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="titulo1">Red Tic</h1>
                    <p class="texto">Te ayudamos a comunicarte
                    <br>
                    con todas las personas
                    <br> 
                    de todo el mundo.</p>
                </div>
                
                <div class="col">
                    <div class="card">
                        <div class="form-box">
                            <h1 class="titulo1">Red Tic</h1>
                            <div class="button-box">
                                <div id="elegir"></div>
                                <button class="toggle-btn" onclick="register()">REGISTRATE</button>
                            </div>
                            <form  class="input-group1" v-on:submit.prevent="processRegistro">
                                <input type="email" class="input-fild" placeholder="Email" required v-model="user.email">
                                <input type="text" class="input-fild" placeholder="Nombre Completo" required v-model="user.name">
                                <input type="text" class="input-fild" placeholder="Nombre de Usuario" required  v-model="user.username">
                                <input type="password" class="input-fild" placeholder="Contraseña" required v-model="user.password">
                                <button type="submit" class="submit-btn">Registrate</button>
                                <p class="texto">¿Ya tienes una cuenta?  <router-link to="/" class="link" > Iniciar Sesion </router-link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
import axios from "axios";
export default {
  name: "registrarse",
  data: function () {
    return {
      user: {
        username: "",
        password: "",
        name: "",
        email: "",
      },
    };
  },
  methods: {
    processRegistro: function () {
      axios
        .post("https://red-social-be1.herokuapp.com/user/", this.user, {
          headers: {},
        })
        .then((result) => {
          let dataRegistro = {
            name: this.user.name,
            email: this.user.email,
            token_access: result.data.access,
            token_refresh: result.data.refresh,
          };
          this.$emit("completedSignUp", dataRegistro);
        })
        .catch((error) => {
          console.log(error);
          alert("ERROR: Fallo en el registro.");
        });
    },
    verifyAuth: function () {
      this.is_auth = localStorage.getItem("isAuth") || false;

      if (this.is_auth == false) 
        this.$router.push({ name: "logIn" });
      else
       this.$router.push({ name: "home" });
    },

    loadLogIn: function () {
      this.$router.push({ name: "logIn" });
    },

    loadSignUp: function () {
      this.$router.push({ name: "signUp" });
    },
    
    loadBuscarPaciente: function () {
      this.$router.push({ name: "buscarPaciente" });
    },

    loadCrearPaciente: function () {
      this.$router.push({ name: "crearPaciente" });
    },

    completedLogIn: function (data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      localStorage.setItem("name", data.name);
      alert("Autenticación Exitosa");
      this.verifyAuth();
    },
    
    completedCrearPaciente: function() {
      alert("Registro Exitoso");
      this.completedCrearPaciente();
    },
    
    data: function () {
      localStorage.setItem("name", data.name);
    }
  },
};
</script>

<style>
.container{
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background: #fff;
    padding-left: 8%;
    padding-right: 8%;
}

.row{
    display: flex;
    height: 88%;
    align-items: center;
}

.row .texto{
    font-size: 30px;
}

.col{
    flex-basis: 50%;
}

.titulo1 {
    color: #000;
    font-size: 70px;
    font-family: "XXIIGeomDEMO-Book";
    margin: 50px, auto;
    
}

.texto {
    color: #000;
    font-size: 10px;
    font-family: "XXIIGeomDEMO-Book";
}
.card {
    width: 1000px;
    height: 760px;
    display: inline-block;
    border-radius: 10px;
    padding: 15px 25px;
    box-sizing: border-box;
    cursor: pointer;
    margin: 10px 15px;
    background-image: url(../assets/celular.png);
    background-position: right;
    background-size: cover;
}

.card .texto{
    font-size: 15px;
    margin-left: 40px;
}

/* login */

.form-box {
    width: 370px;
    height: 628px;
    position: relative;
    margin: 6% auto;
    margin-left: 390px;
    background:transparent;
    padding: 5px;
    border-radius: 10px;
    overflow: hidden;
}

.form-box .titulo1{
    font-size: 30px;
    text-align: center;
}


.marca .titulo1 {
    text-align: center;
    margin-top: 40px;
    font-family: "XXIIGeomDEMO-Book";
    font-size: 10px;
}

.button-box {
    width: 240px;
    margin: 30px auto;
    position: relative;
    margin-left: 120px;
}

.toggle-btn {
    padding: 10px 22px;
    cursor: pointer;
    background: transparent;
    border: 0px;
    outline: none;
    position: relative;
    color: #000;
}

#elegir {
    top: 0;
    left: 0;
    position: absolute;
    width: 120px;
    height: 100%;
    background: linear-gradient( to right, rgba(40, 126, 255, 0.7), rgba(18, 247, 255, 0.7));
    border-radius: 30px;
    transition: 0.8s;
    width:140px;
    text-align: center;
}

.input-group1 {
    top: 180px;
    position: absolute;
    width: 280px;
    transition: 0.8s;
    text-align: center;
    color: #ADADAD;
    margin-left: 45px;
}

.input-group .texto {
    font-size: 12px;
    font-family: "ghotic";
}

.input-field {
    width: 100%;
    padding: 10px 0;
    margin: 40px 0;
    border-left: 0;
    border-top: 0;
    border-right: 0;
    border-bottom: 2px solid #ADADAD;
    outline: none;
    background: transparent;
}



.submit-btn {
    width: 60%;
    padding: 10px 30px;
    cursor: pointer;
    display: inline-block;
    margin: 20px;
    background: linear-gradient( to right, rgba(40, 126, 255, 0.7), rgba(18, 247, 255, 0.7));
    border: 0px;
    outline: none;
    border-radius: 30px;
    color: #fff;
    margin-left: 50px;
}

.submit-btn:hover {
    transform: scale(1.1);
}

.link {
    font-size: 15px;
    cursor: pointer;
    color: #00c4da;
    font-family: "ghotic";
    text-decoration: none;
}


#register {
    left: 450px;
}

</style>