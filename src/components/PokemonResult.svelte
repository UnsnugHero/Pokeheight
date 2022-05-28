<script>
	export let trainerHeight;
	export let pokemon;
</script>

<div class="pokemon-result-container">
	<p>{pokemon.name}</p>
	<p>{pokemon.height}</p>
	<img src={pokemon.sprite} alt={pokemon.name}/>
	<p>Trainer height: {trainerHeight}</p>
</div>