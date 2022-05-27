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
	// TODO: validate that height > 0
	let userHeight = null;
	let selectedGeneration = 0;
	let selectedPokemonId = null;
	let currPokemonPool = allPokemon;

	$: formState = {useRandomPokemon, selectedGeneration, selectedPokemonId: selectedPokemonId}

	const clickCheckboxHandler = function() {
		// if Random Pokemon toggle is unselected, then the selectedPokemon needs to be cleared (and set if its set)
		useRandomPokemon = !useRandomPokemon;

		if(useRandomPokemon) {
			selectedPokemonId = null;
		} 
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
	}

	const selectPokemonHandler = ({ detail }) => selectedPokemonId = detail

	const dispatch = createEventDispatcher();
	const submitFormHandler = function() {
		// pass the form value
		dispatch('form-submit', formState);
	}
</script>

<div class="form-container">
	<div class="filters">
		<Input value={userHeight} placeholder="Height" />
		<Checkbox label="Use Random Pokemon" checked={useRandomPokemon} onClickHandler={clickCheckboxHandler}/>
		<Dropdown enableAny={true} options={genOptions} label="Pick Generation" on:selected={selectGenerationHandler}/>

		{#if !useRandomPokemon}
			<Dropdown options={currPokemonPool} label="Pick Pokemon" on:selected={selectPokemonHandler}/>
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