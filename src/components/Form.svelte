<script>
	import { createEventDispatcher } from 'svelte';

	import Button from './Button.svelte';
	import Dropdown from './Dropdown.svelte';
	import Checkbox from './Checkbox.svelte';
	import { GENERATION_OPTIONS } from '../constants/form.constants';
	
	const genOptions = GENERATION_OPTIONS;

	const selectGenerationHandler = function({ detail }) {
		console.log('Generation picked: ', detail);
	}

	const dispatch = createEventDispatcher();
	const submitFormHandler = function() {
		// pass the form value
		dispatch('form-submit', {})
	}
</script>

<div class="form-container">
	<div class="filters">
		<Checkbox label="Use Random Pokemon" />
		<Dropdown enableAny={true} options={genOptions} label="Pick Generation" on:selected={selectGenerationHandler}/>
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
</style>