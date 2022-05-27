<script>
	export let value;
	export let placeholder;
</script>

<input bind:value type="number" min={12} max={120} {placeholder}>