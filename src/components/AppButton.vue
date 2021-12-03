<template>
  <button 
    @click="$emit('clicked')"
    :class="success ? 'success' : 'danger'"
    >{{ text }}</button>
</template>

<script>
export default {
  name: 'AppButton',

  props: {
    text: String,
    success: Boolean,
  }
}
</script>

<style scoped>
  button {
    color: #fff;
    cursor: pointer;
  }
  .success {
    background-color: green;
  }
  .danger {
    background-color: red;
  }
</style>
