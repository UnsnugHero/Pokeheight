<script>
	import { createEventDispatcher } from 'svelte';

	import Button from './Button.svelte';
	import Dropdown from './Dropdown.svelte';
	import Checkbox from './Checkbox.svelte';
	import { GENERATION_OPTIONS } from '../constants/form.constants';
	
	const genOptions = GENERATION_OPTIONS;

	export let allPokemon;

	let useRandomPokemon = true;
	let selectedGeneration = 0;
	let selectedPokemon = null;
	let currPokemonPool = allPokemon;

	$: formState = {useRandomPokemon, selectedGeneration, selectedPokemon}

	const clickCheckboxHandler = function() {
		useRandomPokemon = !useRandomPokemon;
	}

	const selectGenerationHandler = function({ detail }) {
		if(selectedGeneration !== detail) {
			selectedGeneration = detail;

			if(detail === 0) {
				currPokemonPool = allPokemon;
			} else {
				currPokemonPool = allPokemon.filter(pkmn => pkmn.generation === detail);
			}
		}
		console.log(currPokemonPool);
	}

	const dispatch = createEventDispatcher();
	const submitFormHandler = function() {
		console.log(currPokemonPool);
		// pass the form value
		dispatch('form-submit', formState);
	}
</script>

<div class="form-container">
	<div class="filters">
		<Checkbox label="Use Random Pokemon" checked={useRandomPokemon} onClickHandler={clickCheckboxHandler}/>
		<Dropdown enableAny={true} options={genOptions} label="Pick Generation" on:selected={selectGenerationHandler}/>

		{#if !useRandomPokemon}
			<Dropdown label="Pick Pokemon"/>
		{/if}

	</div>
	<div class="footer">
		<Button buttonText='Go!' onClickHandler={submitFormHandler} />
	</div>
</div>

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