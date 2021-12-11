<template>
  <div>Detalle</div>

  <div v-if="pokemonData" class="pokemon">
    {{ pokemonData }}
  </div>
</template>

<script>
import axios from "axios";
import NProgress from "nprogress";

export default {
  data() {
    return {
      pokemonId: null,
      pokemonData: null,
    };
  },

  created() {
    this.pokemonId = this.$route.params.id;

    NProgress.start();

    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + this.pokemonId)
      .then((response) => {
        this.pokemonData = response.data;
      })
      .then(() => NProgress.done());
  },
};
</script>
