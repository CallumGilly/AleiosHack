<script>
	// import './styles.css';

	import HomeButton from './HomeButton.svelte';

	import ThankYou from './ThankYou.svelte';
	import CloseButton from './CloseButton.svelte';
	import ReportForm from './ReportForm.svelte';

	export let form;
</script>

<svelte:head>
	<title>Report</title>
	<meta name="description" content="Report an event" />
</svelte:head>

<div class="app">
	{#if !form?.success}
		<CloseButton />
		<ReportForm {form}/>
	{:else}
		<ThankYou />
		<HomeButton />
	{/if}
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background: rgb(255,255,255);
		background: linear-gradient(180deg, rgba(255,255,255,1) 50%, rgb(212, 212, 212) 100%);
	}
</style>
