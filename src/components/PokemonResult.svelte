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
	{#if trainerHeight > pokemon.height}
		<div class="pokemon-stacked">
			{#each pokeFitToTrainerHeight as sprite}
				<img class="pokemon-img" src={sprite} alt="poke-height" style="--poke-width: {modPokeHeight}px" />
			{/each}
		</div>
		<p>Your height in {pokemon.name}'s</p>
	{:else}
		<div class="tall-pokemon-img-container">
			<img class="tall-pokemon-img" src={pokemon.sprite} alt="big pokemon" style="--poke-width: {modPokeHeight}px" />
			<div class="cover"></div>
		</div>
		<p>{pokemon.name} is taller than you!</p>
	{/if}
</div>

<style>
	.pokemon-result-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		min-width: 50%;
	}

	.pokemon-stacked, .tall-pokemon-img-container {
		display: flex;
		flex-direction: column;
		position: absolute;
		z-index: -1;
	}

	.pokemon-img, .tall-pokemon-img {
		width: var(--poke-width);
		pointer-events: none;
	}

	.pokemon-stacked {
		margin-bottom: 45px;
	}
</style>