<script>
	import { createEventDispatcher } from 'svelte';

	import Button from './Button.svelte';
	import Dropdown from './Dropdown.svelte';
	import Checkbox from './Checkbox.svelte';
	import Input from './Input.svelte';
	import { GENERATION_OPTIONS } from '../constants/form.constants';
	
	const genOptions = GENERATION_OPTIONS;

	export let allPokemon;

	let useRandomPokemon = true;
	let userHeight = 1;
	let selectedGeneration = 0;
	let selectedPokemonId = 1;
	let currPokemonPool = allPokemon;

	$: formState = {
		useRandomPokemon, 
		selectedGeneration, 
		selectedPokemonId: selectedPokemonId, 
		height: userHeight
	}

	$: if(selectedGeneration === 0) {
		currPokemonPool = allPokemon;
	}
	else {
		currPokemonPool = allPokemon.filter(pkmn => pkmn.generation === selectedGeneration);
	}

	const dispatch = createEventDispatcher();
	const submitFormHandler = function() {
		if(!userHeight) return;
		dispatch('form-submit', formState);
	}
</script>

<form on:submit={(e) => e.preventDefault()} class="form-container">
	<div class="filters">
		<Input bind:value={userHeight} label="Height (in)" />
		<Checkbox label="Use Random Pokemon" bind:checked={useRandomPokemon} />
		<Dropdown enableAny={true} options={genOptions} label="Pick Generation" bind:value={selectedGeneration}/>

		{#if !useRandomPokemon}
			<Dropdown options={currPokemonPool} label="Pick Pokemon" bind:value={selectedPokemonId} />
		{/if}

	</div>
	<div class="footer">
		<Button buttonText='Go!' onClickHandler={submitFormHandler} />
	</div>
</form>

<style>
	.form-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		max-width: 480px;
	}

	.filters {
		display: flex;
		flex-direction: column;
	}
</style>