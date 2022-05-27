<script>
	import Button from './Button.svelte';

	const submitFormHandler = function() {
		console.log("SUBMIT!");
	}
</script>

<div class="form-container">
	<Button buttonText='Go!' onClickHandler={submitFormHandler} />
</div>