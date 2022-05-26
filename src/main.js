import App from './App.svelte';
import * as PokemonService from './pokemon-service';

// get pokemon on load and set loading to false when retrieved
let allPokemon = null;
let loading = true;
let error = false;

PokemonService.getAllSupportedPokemon()
  .then((res) => (allPokemon = res))
  .catch((err) => {
    console.error(err);
    error = true;
  })
  .finally(() => (loading = false));

const app = new App({
  target: document.body,
  props: {
    pokemon: allPokemon,
    error,
    loading,
  },
});

export default app;
