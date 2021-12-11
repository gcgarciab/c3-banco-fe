<template>
  <div>Lista Pokemons</div>

  <div v-if="pokemons.length" class="pokemons">
    <router-link
      v-for="(pokemon, index) in pokemons"
      :key="index"
      :to="`/pokemon/${index + 1}`"
    >
      {{ pokemon.name }} <br />
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
import NProgress from "nprogress";

export default {
  data() {
    return {
      pokemons: [],
    };
  },

  created() {
    NProgress.start();

    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        this.pokemons = response.data.results;
      })
      .then(() => NProgress.done());
  },
};
</script>
