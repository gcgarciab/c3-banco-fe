<template>
  <AppHeader :user="authStore.currentUser" @logout="authStore.logout()" />
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/test">Test</router-link>
  </div> -->

  <router-view />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import { useAuthStore } from "./store/auth";

export default {
  components: {
    AppHeader,
  },

  data() {
    return {
      authStore: useAuthStore(),
    };
  },

  created() {
    const access = localStorage.getItem("access");

    if (access) {
      this.authStore.$patch({
        currentUser: {
          access,
          refresh: localStorage.getItem("refresh"),
        },
      });
    } else {
      this.$router.push({ name: "SignIn" });
    }
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
