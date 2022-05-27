<script>
	export let buttonText = 'Button';

	export let onClickHandler = function() {
		console.warn('Unimplemented button handler!!!')
	};
</script>

<div class="button-wrapper">
	<button on:click={onClickHandler}>{buttonText}</button>
</div>

<style>

</style>