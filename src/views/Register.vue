<template>
  <section class="auth">
    <form class="auth-form" @submit.prevent="createProduct()">
      <h2 class="form-title">Crear Cuenta</h2>

      <div class="form-input">
        <label>Username:</label>
        <input type="text" placeholder="Username" v-model="user.username" />
      </div>
      <div class="form-input">
        <label>Password:</label>
        <input type="text" placeholder="Password" v-model="user.password" />
      </div>
      <div class="form-input">
        <label>Name:</label>
        <input type="text" placeholder="Name" v-model="user.name" />
      </div>
      <div class="form-input">
        <label>Email:</label>
        <input type="email" placeholder="Email" v-model="user.email" />
      </div>
      <div class="form-input">
        <label>Balance:</label>
        <input type="number" placeholder="Balance" v-model="balance" />
      </div>

      <button type="submit">Registrarme</button>
    </form>
  </section>
</template>

<script>
import axios from "axios";
import NProgress from "nprogress";
import { useAuthStore } from "../store/auth";

export default {
  data() {
    return {
      authStore: useAuthStore(),

      user: {
        username: "",
        password: "",
        name: "",
        email: "",
      },
      balance: 0,

      product: {
        name: "",
        price: 0,
        quantity: 0,
      },
    };
  },

  methods: {
    createUser() {
      const user = {
        ...this.user,
        account: {
          lastChangeDate: new Date().toISOString(),
          balance: this.balance,
          isActive: true,
        },
      };

      NProgress.start();
      axios
        .post("https://intensivo3-banco-be.herokuapp.com/user/", user)
        .then((response) => {
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
