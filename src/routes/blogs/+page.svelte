<script lang="ts">
	import ComingSoon from '$lib/components/ComingSoon.svelte';
	import '../../styles/index';
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>PatrickChoDev Blogs</title>
</svelte:head>

<div
	in:fly|global={{ y: -50, duration: 500, delay: 500 }}
	out:fly|global={{ y: 50, duration: 500 }}
>
	<ComingSoon />
</div>

<style lang="scss">
	div {
		flex: 1;
		display: flex;
	}
</style>
