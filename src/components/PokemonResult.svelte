<script>
	export let trainerHeight;
	export let pokemon;

	let modPokeHeight = 190;

	const getPokemonFitToTrainerHeight = function(pkmnHeight, trainerHeight) {
		let numPokemon = trainerHeight / pkmnHeight;
		const imgArray = [];

		console.log('pokemon height to trainer height ratio: ', pokemon.height / trainerHeight);
		console.log('pokemon to render: ', numPokemon)
		if((pokemon.height / trainerHeight) < (2 / 3)) {
			numPokemon = Math.ceil(numPokemon);
		}
		else {
			numPokemon = Math.floor(numPokemon);
		}
		console.log('res: ', numPokemon);

		for(let i = 0; i < numPokemon; i++){
			imgArray.push(pokemon.sprite);
		}

		return imgArray;
	}

	$: modPokeHeight = 190 * (pokemon.height / (trainerHeight * 0.75));
	$: pokeFitToTrainerHeight = getPokemonFitToTrainerHeight(pokemon.height, trainerHeight);

</script>

<div class="pokemon-result-container">
	<div class="pokemon-stacked">
		{#each pokeFitToTrainerHeight as sprite}
			<img class="pokemon-img" src={sprite} alt="poke-height" style="--poke-width: {modPokeHeight}px" />
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
		margin-bottom: 45px;
		position: absolute;
	}

	.pokemon-img {
		width: var(--poke-width);
	}
</style>