<script>
	import './styles.css';
	import ReportButton from './report-button.svelte';
	import AnalyticsButton from './analytics-button.svelte';
	import L from 'leaflet';

	const initialView = [50.935396, -1.395846]
	function create_map(container) {
		let m = L.map(container, {preferCanvas: true}).setView(initialView, 15);

		L.tileLayer(
	    	'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
	    	{
	      		attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,
	        	&copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
	      		subdomains: 'abcd',
	      		maxZoom: 20,
	    	}
	  	).addTo(m);

    	return m;
	}
</script>

<div class="app">
	<AnalyticsButton />

	<main>
		<slot />
	</main>

	<div class="map" style="height:100vh;width:100vw;z-index:0" use:create_map />
	<ReportButton />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
