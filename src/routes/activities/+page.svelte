<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import '../../styles/index';
	import Activity from '$lib/components/Activity.svelte';
</script>

<svelte:head>
	<title>Activities - PatrickChoDev</title>
</svelte:head>

<div
	in:fly|global={{ y: -50, duration: 500, delay: 500 }}
	out:fly|global={{ y: 50, duration: 500 }}
>
	<PageHeader
		title="Projects & Activities"
		sub="Project, Works experience, Activities, Speaking and other I've done"
	/>
	<div class="activities">
		<Activity></Activity>
	</div>
</div>

<style lang="scss">
	div {
		flex: 1;
		display: flex;
		flex-direction: column;
		div.activities {
			flex: 1;
		}
	}
</style>
