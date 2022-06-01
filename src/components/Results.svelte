<script>
	import TrainerResult from './TrainerResult.svelte';
	import PokemonResult from './PokemonResult.svelte';

	export let trainerHeight;
	export let pokemon;

	$: console.log(trainerHeight);
	$: console.log(pokemon.height);
</script>

<div class="results-container">
	<TrainerResult />
	<PokemonResult {trainerHeight} {pokemon}/>
</div>

<style>
	.results-container {
		display:flex;
		flex-direction: row;
		min-width: 50%;
		justify-content: space-evenly;
	}
</style>