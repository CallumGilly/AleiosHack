<script>
	import CloseButton from './CloseButton.svelte';
	// import { onMount } from 'svelte';
	import 'charts.css';
	import { each } from 'svelte/internal';

	export let data;
</script>

<svelte:head>
	<title>Analytics</title>
	<meta name="description" content="View analytics" />
</svelte:head>

<div class="app">
	<section id="analytics-page">
		<!-- <section>
		<table
			id="chart"
			class="charts-css column show-heading show-labels show-primary-axis show-4-secondary-axes show-data-axes data-spacing-15"
		>
			<caption> Trends </caption>

			<thead>
				<tr>
					<th scope="col"> Year </th>
					<th scope="col"> Value </th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<th> October </th>
					<td style="--size:0.3;" />
				</tr>
				<tr>
					<th> November </th>
					<td style="--size:0.4;" />
				</tr>
				<tr>
					<th> December </th>
					<td style="--size:0.2;" />
				</tr>
				<tr>
					<th> January </th>
					<td style="--size:0.7;" />
				</tr>
				<tr>
					<th> February </th>
					<td style="--size:1.0;" />
				</tr>
			</tbody>
		</table>
	</section> -->
		{#each data.arr as event}
			<div class="event-item">
				<p>Category: {event.Category}<br>Description: {event.Description}<br>Coordinates: {event.Latitude}, {event.Longitude}<br>Time: {event.Time}</p>
			</div>
		{/each}
	</section>

	<CloseButton />
</div>

<style>
	#analytics-page {
		width: 100%;
		height: 100%;
	}

	.app {
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		height: 100%;
		background: rgb(255,255,255);
		background: linear-gradient(180deg, rgba(255,255,255,1) 50%, rgb(212, 212, 212) 100%);
	}

	.event-item {
		width: 96vw;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		row-gap: 12px;
		/* border-radius: 16px; */
		font-weight: bold;
		margin: auto;
	}

	#chart {
		width: 96%;
		height: 30vh;
		margin-top: 10vh;
	}
</style>
