<template>
  <div v-if="userData" class="home" style="padding-top: 40px">
    <img alt="Vue logo" src="../assets/logo.png" width="100" height="100" />

    <h1>Hola, {{ userData.name }}</h1>

    <div class="user-account">
      <h2>Saldo: {{ numberFormat(userData.account.balance) }}</h2>
      <h2>Fecha último movimiento: {{ dateFormat(userData.account.lastChangeDate) }}</h2>
    </div>
  </div>

  <h1 v-else>Cargando la información ...</h1>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import NProgress from "nprogress";
import { useAuthStore } from "../store/auth";

export default {
  name: "Home",

  data() {
    return {
      authStore: useAuthStore(),
      userData: null,
    };
  },

  created() {
    NProgress.start();
    this.getUserData()
      // Asignar la información al usuario (caso feliz)
      .then((data) => (this.userData = data))
      .catch((error) => {
        if (error.response.status === 401) {
          this.refreshToken().then(() => {
            this.getUserData()
              // Asignar la información al usuario (luego de actualizar el token)
              .then((data) => (this.userData = data));
          });
        } else {
          this.redirectToSignIn();
        }
      })
      .then(() => NProgress.done());
  },

  methods: {
    getUserData() {
      return axios
        .get("https://intensivo3-banco-be.herokuapp.com/user/" + this.authStore.userId, {
          headers: {
            Authorization: `Bearer ${this.authStore.currentUser.access}`,
          },
        })
        .then((response) => response.data);
    },

    refreshToken() {
      const refresh = this.authStore.currentUser.refresh;

      axios
        .post("https://intensivo3-banco-be.herokuapp.com/refresh/", { refresh })
        .then((response) => {
          // OBTIENE NUEVO TOKEN
          localStorage.setItem("access", response.data.access);
          this.authStore.$patch({
            currentUser: {
              access: response.data.access,
              refresh,
            },
          });
          console.log("New token:", response.data);
        })
        .catch(() => {
          this.redirectToSignIn();
        });
    },

    redirectToSignIn() {
      this.$router.push({ name: "SignIn" });
    },

    numberFormat(value) {
      const formatter = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
      });

      return formatter.format(value);
    },

    dateFormat(date) {
      return new Date(date).toLocaleDateString();
    },
  },
};
</script>
