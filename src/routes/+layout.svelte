<script lang="ts">
	import { page } from '$app/stores';
	import NavBar from '$lib/components/NavBar.svelte';
	import Rainbow from '$lib/components/Rainbow.svelte';
	import '../styles/index';
	let path: string;
	$: path = $page.url.pathname;
</script>

<div>
	<Rainbow />
	<NavBar {path} />
	<slot />
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}
</style>
