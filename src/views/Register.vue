<template>
  <section class="register">
    <form
      class="auth-form"
      @submit.prevent="createUser()"
    >
      <h2 class="form-title">Crear cuenta</h2>

      <div class="form-input">
        <input 
          type="text" 
          placeholder="Username" 
          v-model="user.username"
        >
      </div>
      <div class="form-input">
        <input 
          type="text" 
          placeholder="Password"
          v-model="user.password"
        >
      </div>
      <div class="form-input">
        <input 
          type="text" 
          placeholder="Name"
          v-model="user.name"
        >
      </div>
      <div class="form-input">
        <input 
          type="email" 
          placeholder="Email"
          v-model="user.email"
        >
      </div>
      <div class="form-input">
        <input 
          type="number" 
          placeholder="Balance"
          v-model="balance"
        >
      </div>

      <button type="submit">Registrarme</button>
    </form>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
        name: '',
        email: '',
      },
      balance: 0,
    }
  },

  methods: {
    createUser() {
      const user = {
        ...this.user,
        account: {
          lastChangeDate: new Date().toISOString(),
          balance: this.balance,
          isActive: true
        }
      }
      console.log('Crear usuario', user)
      axios
        .post('https://intensivo3-banco-be.herokuapp.com/user/', user)
        .then((response) => {
          console.log(response)
          localStorage.setItem('access', response.data.access)
          localStorage.setItem('refresh', response.data.refresh)
          this.$router.push({ name: 'Home' })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>