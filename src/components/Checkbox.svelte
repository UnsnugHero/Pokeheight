<script>
	export let label = 'label';
	export let checked;
</script>

<div class="checkbox-container">
	<input class="checkbox" type="checkbox" name="checkbox" bind:checked>
	<label for="checkbox">{label}</label>
</div>

<style>
	.checkbox-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 15px;
	}

	.checkbox {
		margin-bottom: 0;
		margin-right: 5px;
	}
</style>