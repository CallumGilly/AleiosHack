<script>
	import { enhance } from '$app/forms';
	import Geolocation from 'svelte-geolocation';
	import { text } from 'svelte/internal';

	export let form;
	let success;
	let error;
	let notSupported;
	$: submittable = success;
	let textbox;

	let files;
	let coords = [];
</script>

<section>
	<Geolocation getPosition bind:coords bind:success bind:error bind:notSupported />
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
			<option>Water Wastage</option>
			<option>Excessive Energy Consumption</option>
			<option>Air Pollution</option>
		</select>

		<label for="description" class="form-label">Description</label>
		<input id="description" name="description" class="form-control" value={textbox ?? ''} />
		<textarea bind:value={textbox}></textarea>

		{#if files}
			<label id="image-label" for="image-input" class="btn btn-success"
				><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"
					><title>Checkmark</title><path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="32"
						d="M416 128L192 384l-96-96"
					/></svg
				>Retry</label
			>{:else}
			<label id="image-label" for="image-input" class="btn btn-primary"
				><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"
					><title>Camera</title><path
						d="M350.54 148.68l-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 00-32 32v192a32 32 0 0032 32h352a32 32 0 0032-32V192a32 32 0 00-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32z"
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="32"
					/><circle
						cx="256"
						cy="272"
						r="80"
						fill="none"
						stroke="currentColor"
						stroke-miterlimit="10"
						stroke-width="32"
					/><path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="32"
						d="M124 158v-22h-24v22"
					/></svg
				>Take Photo</label
			>{/if}
		<input
			id="image-input"
			name="image"
			type="file"
			accept="image/*"
			capture
			class="form-control mb-3"
			bind:files
		/>

		<input name="long" type="input" class="location" value={coords[0]} />
		<input name="lat" type="input" class="location" value={coords[1]} />
		{#if notSupported}
			Your browser does not support the Geolocation API.
		{:else}{#if error}
				An error occurred. {error.code} {error.message}
			{/if}
			<!-- {#if loading}
				loading{/if} -->
		{/if}

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
</section>

<style>
	form {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-self: center;
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

	#image-label {
		width: 96vw;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		border-radius: 10dvh;
	}

	#image-label svg {
		width: 50px;
		height: 50px;
		display: block;
	}

	#description {
		display:none;
	}

	#image-input {
		display: none;
	}

	.location {
		display: none;
	}
</style>
