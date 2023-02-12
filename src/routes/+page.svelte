<script>
	import './styles.css';
	import ReportButton from './report-button.svelte';
	import Map from './Map.svelte';
	import AnalyticsButton from './analytics-button.svelte';

	export let data;
</script>

<svelte:head>
	<title>Map</title>
</svelte:head>

<div class="app">
	<div id="map_page">
		<AnalyticsButton />
		<Map data={data}/>
		<ReportButton />
	</div>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
