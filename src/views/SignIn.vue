<template>
  <section class="auth">
    <form class="auth-form" @submit.prevent="login()">
      <h2 class="form-title">Autenticación</h2>

      <div class="form-input">
        <label>Username:</label>
        <input type="text" placeholder="Username" v-model="user.username" />
      </div>
      <div class="form-input">
        <label>Password:</label>
        <input type="text" placeholder="Password" v-model="user.password" />
      </div>

      <button type="submit">Iniciar sesión</button>
    </form>
  </section>
</template>

<script>
import axios from "axios";
import NProgress from "nprogress";
import { useAuthStore } from "../store/auth";

export default {
  name: "SignIn",

  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      authStore: useAuthStore(),
    };
  },

  methods: {
    login() {
      NProgress.start();
      axios
        .post("https://intensivo3-banco-be.herokuapp.com/login/", this.user)
        .then((response) => {
          // console.log(response);
          this.authStore.setUser(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => NProgress.done());
    },
  },
};
</script>
