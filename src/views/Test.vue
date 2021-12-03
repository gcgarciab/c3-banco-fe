<template>
  <h2>Test view</h2>

  <h4>{{ number }}</h4>

  <AppButton
    text="Agregar"
    :success="true"
    @clicked="add()"
  />

  <AppButton
    text="Restar"
    @clicked="substract()"
  />
</template>

<script>
import AppButton from "../components/AppButton.vue";

export default {
  name: "Test",

  components: { AppButton },

  data() {
    return {
      number: 0
    }
  },

  methods: {
    add() {
      console.log('Agregar')
      this.number += 1
    },

    substract() {
      this.number -= 1
    }
  },
}
</script>

<style scoped>

</style>
