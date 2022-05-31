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
	<p>Your height in {pokemon.name}'s</p>
</div>

<style>
	.pokemon-result-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		min-width: 50%;
	}

	.pokemon-stacked {
		display: flex;
		flex-direction: column;
	}
</style>