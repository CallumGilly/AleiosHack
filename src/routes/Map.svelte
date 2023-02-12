<script>
	import './styles.css';

	export let data;

	const INITIAL_VIEW = [50.935396, -1.395846];

	let map;
	let marker;

	function add_marker(location, reports, type) {
		marker = L.marker(location)
			.addTo(map)
			.bindPopup(`${reports} ${type} report in this area`);
		// .openPopup()
	}

	function create_map(container) {
		let m = L.map(container, { preferCanvas: true }).setView(INITIAL_VIEW, 15);

		L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
			// attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,
			// &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
			subdomains: 'abcd',
			maxZoom: 20
		}).addTo(m);

		// m.once("locationfound", function(ev) {
		// 	if (!marker) {
		// 		marker = L.marker(ev.latlng);
		// 	} else {
		// 		marker.setLatLng(ev.latlng);
		// 	}
		// })

		m.locate({ setView: true, watch: false, maxZoom: 19 });

		map = m;
		// add_marker([50.935396, -1.395846], 2);
		console.log(data);

		data.arr.forEach((element) => {
			add_marker([element.Latitude, element.Longitude], 1, element.Category);
		});
	}
</script>

<div class="map" style="height:100%;width:100%;z-index:0" use:create_map />

<style>
</style>
