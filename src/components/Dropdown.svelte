<script>
	import { createEventDispatcher } from 'svelte';

	export let enableAny = false;
	export let options = [];
	export let label = 'Label';

	const dispatch = createEventDispatcher();
	const handleSelect = function(event) {
		const id = event.target.value;
		dispatch('selected', Number.parseInt(id));
	}

</script>

<select class="dropdown" on:change={(e) => handleSelect(e)}>
	<option value="" disabled selected hidden>{label}</option>
	{#if enableAny}
		<option value={0}>Any</option>
	{/if}
	{#each options as option}
		<option value={option.id}>{option.text}</option>
	{/each}
</select>

<style>
</style>