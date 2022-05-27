<script>
	export let label = 'label';
	export let onClickHandler = function() { console.log('On click unimplemented!') }
</script>

<div>
	<label for="checkbox">{label}</label>
	<input type="checkbox" name="checkbox" on:click={onClickHandler}>
</div>