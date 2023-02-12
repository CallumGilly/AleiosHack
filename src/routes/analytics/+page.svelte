<script>
	import CloseButton from './CloseButton.svelte';
	// import { onMount } from 'svelte';
	import 'charts.css';

	export let data;
</script>

<svelte:head>
	<title>Analytics</title>
	<meta name="description" content="View analytics" />
</svelte:head>

<section id="analytics-page">
	<table id="chart"
		class="charts-css column show-heading show-labels show-primary-axis show-4-secondary-axes show-data-axes data-spacing-15 hide-data"
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
				<th> 2016 </th>
				<td style="--size:0.2;" />
			</tr>
			<tr>
				<th> 2017 </th>
				<td style="--size:0.4;" />
			</tr>
			<tr>
				<th> 2018 </th>
				<td style="--size:0.6;" />
			</tr>
			<tr>
				<th> 2019 </th>
				<td style="--size:0.8;" />
			</tr>
			<tr>
				<th> 2020 </th>
				<td style="--size:1.0;" />
			</tr>
		</tbody>
	</table>
</section>

<CloseButton />

<style>
	#analytics-page {
		width: 100vw;
		height: 100dvh;
	}

	#chart {
		width: 96%;
		height: 30vh;
		top: 10vh;
	}
</style>
