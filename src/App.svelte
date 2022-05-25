<script>
	import Loader from './Loader.svelte';
	import Form from './Form.svelte';
</script>

<main>
	<h1 class="title">
		<span class="title-first">Poké</span><span class="title-second">Height</span>
		<Form />
	</h1>

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #D2042D;
		font-size: 4em;
		font-weight: 100;
	}

	.title-first {
		font-family: poke-hollow;
	}

	.title-second {
		font-family: poke-solid;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>