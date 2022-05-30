<script>
	export let trainerHeight;
	export let pokemon;

	const getPokemonFitToTrainerHeight = function(pkmnHeight, trainerHeight) {
		const numPokemon = trainerHeight / pkmnHeight;
		console.log(numPokemon);
		const imgArray = [Math.round(numPokemon)].map(n => pokemon.sprite);
		const pokeLeft = numPokemon % 1;

		return { imgArray, pokeLeft }
	}

	const { sprite, name, height } = pokemon;
	const pokeFitToTrainerHeight = getPokemonFitToTrainerHeight(height, trainerHeight);

	console.log(pokeFitToTrainerHeight);

</script>

<div class="pokemon-result-container">
	<p>{pokemon.name}</p>
	<p>{pokemon.height}</p>
	<img src={pokemon.sprite} alt={pokemon.name}/>
	<p>Trainer height: {trainerHeight}</p>
</div>