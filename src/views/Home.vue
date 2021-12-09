<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Usuario loggeado !!</h1>
    <HelloWorld msg="Prueba Vue Intensivo Ciclo 3" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
import NProgress from "nprogress";
import { useAuthStore } from "../store/auth";

export default {
  name: "Home",

  components: {
    HelloWorld,
  },

  data() {
    return {
      authStore: useAuthStore(),
      userData: null,
    };
  },

  created() {
    NProgress.start();
    axios
      .get("https://intensivo3-banco-be.herokuapp.com/user/" + this.authStore.userId, {
        headers: {
          Authorization: `Bearer ${this.authStore.currentUser.access}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => NProgress.done());
  },
};
</script>
