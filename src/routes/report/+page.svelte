<script>
	import { enhance } from '$app/forms';

	export let data;

	export let form;
	//data.description ? true : false
	$: submittable = true;
</script>

<svelte:head>
	<title>Report</title>
	<meta name="description" content="Report an event" />
</svelte:head>

<div class="app">
	<form
		method="POST"
		use:enhance={() => {
			return ({ update }) => {
				update({ reset: false });
			};
		}}
	>
		<label for="type-select" class="form-label">Report Type</label>
		<select name="type-select" id="type-select" class="form-select form-select-lg mb-3">
			<option>Litter</option>
			<option>Lights on</option>
		</select>

		<label for="description" class="form-label">Description</label>
		<input id="description" name="description" class="form-control" value={form?.email ?? ''} />

		<label id="image-label" for="image" class="btn btn-primary">Take Photo</label>
		<input id="image" name="image" type="file" accept="image/*" capture class="form-control mb-3" />

		<button id="submit-button" class="btn btn-primary" disabled={!submittable}
			><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"
				><title>Paper Plane</title><path
					d="M53.12 199.94l400-151.39a8 8 0 0110.33 10.33l-151.39 400a8 8 0 01-15-.34l-67.4-166.09a16 16 0 00-10.11-10.11L53.46 215a8 8 0 01-.34-15.06zM460 52L227 285"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="32"
				/></svg
			>Submit</button
		>
	</form>
</div>

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

	#submit-button {
		width: 96vw;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		border-radius: 10dvh;
		position: absolute;
		left: 2vw;
		bottom: 2vw;
	}

	#submit-button svg {
		width: 50px;
		height: 50px;
		display: block;
	}

</style>
