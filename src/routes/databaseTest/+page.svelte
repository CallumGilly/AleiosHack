<script>
	export let data;
	setTimeout(1000).them(() => {
	console.log(data);
	})
</script>

<!-- <svelte:window on:keydown={keydown} /> -->

<svelte:head>
	<title>Sverdle</title>
	<meta name="description" content="A Callum clone written in SvelteKit" />
</svelte:head>

<h1>Test of data transfer {data.code}</h1>

