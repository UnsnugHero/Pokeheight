<script>
	export let enableAny = false;
	export let options = [];
	export let label = 'Label';
	export let value;
</script>

<div class="dropdown-container">
	<label for="select">{label}</label>
	<select class="dropdown" name="select" bind:value>
		{#if enableAny}
			<option value={0}>Any</option>
		{/if}
		{#each options as option}
			<option value={option.id}>{option.text}</option>
		{/each}
	</select>
</div>

<style>
</style>