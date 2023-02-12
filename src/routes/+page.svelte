<script>
	import './styles.css';
	import ReportButton from './report-button.svelte';
	import AnalyticsButton from './analytics-button.svelte';
	import L from 'leaflet';

	const INITIAL_VIEW = [50.935396, -1.395846]

	let map;

	function add_marker(location, reports) {
		let marker = L.marker(location).addTo(map)
			.bindPopup(reports + " reports in this area.")
			.openPopup()
	}

	function create_map(container) {
		let m = L.map(container, {preferCanvas: true}).setView(INITIAL_VIEW, 15);

		L.tileLayer(
	    	'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
	    	{
	      		attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,
	        	&copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
	      		subdomains: 'abcd',
	      		maxZoom: 20,
	    	}
	  	).addTo(m);

		m.once("locationfound", function(ev) {
			if (!marker) {
				marker = L.marker(ev.latlng);
			} else {
				marker.setLatLng(ev.latlng);
			}
		})
		
		m.locate({setView: true, watch: false, maxZoom: 19});

		map = m;
		add_marker([50.935396, -1.395846], 2);
	}
</script>

<svelte:head>
	<title>Map</title>
</svelte:head>

<div class="app">
	<div id="map_page">
		<AnalyticsButton />
<!-- 
		<main>
			<slot />
		</main> -->

		<div class="map" style="height:100vh;width:100vw;z-index:0" use:create_map />
		<ReportButton />
	</div>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	/* section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	} */
</style>
