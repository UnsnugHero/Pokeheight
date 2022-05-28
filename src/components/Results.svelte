<script>
	import TrainerResult from './TrainerResult.svelte';
	import PokemonResult from './PokemonResult.svelte';

	export let height;
	export let pokemon;
</script>

<div class="results-container">
	<TrainerResult />
	<PokemonResult />
</div>

<style>
	.results-container {
		display:flex;
		flex-direction: row;
	}
</style>