<script>
	export let trainerHeight;
	export let pokemon;

	const getPokemonFitToTrainerHeight = function(pkmnHeight, trainerHeight) {
		let numPokemon = trainerHeight / pkmnHeight;
		const imgArray = [];

		while(numPokemon > 1) {
			imgArray.push(pokemon.sprite);
			numPokemon -= 1;
		}
		const pokeLeft = numPokemon;

		return { imgArray, pokeLeft }
	}

	$: pokeFitToTrainerHeight = getPokemonFitToTrainerHeight(pokemon.height, trainerHeight);

</script>

<div class="pokemon-result-container">
	<div class="pokemon-stacked">
		{#each pokeFitToTrainerHeight.imgArray as sprite}
			<img src={sprite} alt="poke-height" />
		{/each}
	</div>
	<span>Your height in {pokemon.name}'s</span>
</div>

<style>
	.pokemon-result-container {
		display: flex;
		flex-direction: column;
	}

	.pokemon-stacked {
		display: flex;
		flex-direction: column;
	}
</style>