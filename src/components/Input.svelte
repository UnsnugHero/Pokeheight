<script>
	export let value;
	export let label;
</script>

<div class="input-container">
	<label for="input">{label}</label>
	<input type="number" min={12} max={120} required bind:value>
</div>

<style>
	.input-container {
		margin-bottom: 15px;
	}
</style>