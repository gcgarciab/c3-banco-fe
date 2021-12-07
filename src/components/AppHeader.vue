<template>
  <nav>
    <h1>Banco Misión TIC</h1>

    <div class="nav-items">
      <router-link to="/login">Iniciar sesión</router-link>
      <router-link :to="{ name: 'Register' }">Registrarse</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style scoped>
nav {
  background-color: #222F3D;
  padding: 20px 30px;
  text-align: left;
  display: flex;
  justify-content: space-between;
}

nav h1 {
  margin: 0;
  font-size: 1.5rem;
  line-height: 1;
  color: #fff;
}

.nav-items a {
  color: #fff;
  margin: 0 10px;
  text-decoration: none;
  border: 1px solid #fff;
  padding: 5px 15px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
}

.nav-items a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-items a.router-link-exact-active {
  background-color: #fff;
  color: #222F3D;
}
</style>
