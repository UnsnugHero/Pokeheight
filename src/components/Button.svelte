<script>
	export let buttonText = 'Button';
	export let type = 'button';

	export let onClickHandler = function() {
		console.warn('Unimplemented button handler!!!')
	};
</script>

<button {type} on:click={onClickHandler}>{buttonText}</button>

<style>
</style>