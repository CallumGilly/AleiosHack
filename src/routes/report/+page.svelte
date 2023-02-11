<script>
	import { confetti } from '@neoconfetti/svelte';
	import { enhance } from '$app/forms';

	export let data;

	export let form;

	$: submittable = true;
</script>

<svelte:head>
	<title>Report</title>
	<meta name="description" content="Report an event" />
</svelte:head>

<section>
	<form
		method="POST"
		use:enhance={() => {
			return ({ update }) => {
				update({ reset: false });
			};
		}}
	>
		<label
			>Description
			<input name="description" value={form?.email ?? ''}/></label
		>
		<button disabled={!submittable}>Submit</button>
	</form>
</section>

<style>
	form {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
	}
</style>
