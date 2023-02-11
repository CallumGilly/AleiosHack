<script>
	import './styles.css';
	import ReportButton from './report-button.svelte';
	import AnalyticsButton from './analytics-button.svelte';
	import Map from './map.svelte';
</script>

<div class="app">
	<AnalyticsButton />

	<main>
		<slot />
	</main>

	<ReportButton />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
