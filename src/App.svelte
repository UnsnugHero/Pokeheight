<script>
  import Loader from './components/Loader.svelte';
  import Form from './components/Form.svelte';
	import Results from './components/Results.svelte';
	import * as PokemonService from './pokemon-service';

	// get pokemon on load and set loading to false when retrieved
	let pokemon = null;
	let loading = true;
	let error = false;
	let isFormError = false;
	let trainerHeight = null;

	let selectedPokemon = null;

	PokemonService.getAllSupportedPokemon()
		.then((res) => (pokemon = res))
		.catch((err) => {
			console.error(err);
			error = true;
		})
		.finally(() => (loading = false));

	const getRandomPokemonIndex = function(generation) {
		let pokePool = pokemon;

		if(generation !== 0) {
			pokePool = pokemon.filter(pkmn => pkmn.generation === generation);
		}

		return pokePool[Math.floor(Math.random()*pokePool.length)].id;
	}

	const onFormSubmit = function({ detail }) {
		const { height, useRandomPokemon, selectedGeneration, selectedPokemonId, formError } = detail;
		isFormError = formError;
		if(formError) return;

		let indexToGet = selectedPokemonId;
		
		if(useRandomPokemon) {
			indexToGet = getRandomPokemonIndex(selectedGeneration);
		}
		
		trainerHeight = height;
		PokemonService.getPokemonById(indexToGet)
			.then(pokemon => selectedPokemon = pokemon)
			.catch(err => {
				console.error(err);
				error = true;
			})
	}
</script>

<main>
  <h1 class="title">
    <span class="title-first">Poké</span><span class="title-second">Height</span>
  </h1>
	{#if loading}
		<Loader />
	{:else if error}
		<span>An error occurred! Try reloading.</span>
	{:else}
		<Form allPokemon={pokemon} on:form-submit={onFormSubmit}/>
	{/if}

	{#if selectedPokemon && trainerHeight && !isFormError && !error}
		<Results {trainerHeight} pokemon={selectedPokemon} />
	{/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    display: flex;
		flex-direction: column;
		align-items: center;
  }

  h1 {
    color: #d2042d;
    font-size: 4em;
    font-weight: 100;
		margin: 0;
  }

  .title-first {
    font-family: poke-hollow;
  }

  .title-second {
    font-family: poke-solid;
  }
</style>
