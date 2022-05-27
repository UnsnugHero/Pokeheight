<script>
	export let buttonText = 'Button';

	export let onClickHandler = function() {
		console.warn('Unimplemented button handler!!!')
	};
</script>

<button on:click={onClickHandler}>{buttonText}</button>

<style>
</style>