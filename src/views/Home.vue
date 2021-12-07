<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Usuario loggeado !!</h1>
    <HelloWorld msg="Prueba Vue Intensivo Ciclo 3"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',

  components: {
    HelloWorld
  }
}
</script>
