<script lang="ts">
	import { slide } from 'svelte/transition';
	import MediaQuery from './MediaQuery.svelte';
	let mobile = false;
	export let path: string;
	let routes = [
		['About', '/'],
		['Stacks', '/stacks'],
		['Activities', '/activities'],
		['Blogs', '/blogs']
	];
</script>

<nav>
	<div class="heading">
		<h1>PatrickChoDev</h1>
	</div>

	<MediaQuery query="(min-width: 600px)" let:matches>
		{#if matches}
			<div class="menu">
				{#each routes as r}
					<a class={path == r[1] ? 'active' : ''} href={r[1]}>{r[0]}</a>
				{/each}
			</div>
		{/if}
	</MediaQuery>
	<svg
		viewBox="0 0 100 80"
		on:click={() => (mobile = !mobile)}
		on:keydown={(e) => e.key === 'Enter' && (mobile = !mobile)}
		role="button"
		tabindex="0"
		aria-label="Toggle mobile menu"
		class="menu"
	>
		<rect width="100" height="20" />
		<rect y="30" width="100" height="20" />
		<rect y="60" width="100" height="20" />
	</svg>
</nav>
<MediaQuery query="(max-width: 600px)" let:matches>
	{#if matches && mobile}
		<div
			in:slide|global
			out:slide|global
			class="mobile-menu{mobile ? ' enabled' : ''}"
			on:click={() => (mobile = !mobile)}
			on:keydown={(e) => e.key === 'Enter' && (mobile = !mobile)}
			role="menu"
			tabindex="0"
			aria-label="Mobile navigation menu"
		>
			{#each routes as r}
				<a class={path == r[1] ? 'active' : ''} href={r[1]}>{r[0]}</a>
			{/each}
		</div>
	{/if}
</MediaQuery>

<style lang="scss">
	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		justify-items: flex-end;
		padding: 1vh 1vw;
		& div.heading {
			padding: 0 2vw;
			@media screen and (max-width: 240px) {
				display: none;
			}
		}
		& div.menu {
			display: flex;
			transition: 0.5s;
			& a {
				text-decoration: none;
				padding: 1vh 1vw;
				&.active {
					text-decoration: underline;
					text-transform: uppercase;
					text-underline-offset: 3px;
					font-weight: 700;
				}
				&:not(.active):hover {
					text-decoration: underline 1px;
					text-decoration-style: dashed;
					text-underline-offset: 3px;
				}
			}
		}
		& svg {
			padding: 8px;
			display: none;
			cursor: pointer;
			@media screen and (max-width: 600px) {
				display: block;
				width: 24px;
				height: 24px;
			}
		}
	}
	div.mobile-menu {
		display: flex;
		padding: 10vh 10vw;
		flex-direction: column;
		z-index: 1;
		position: fixed;
		width: 100dvw;
		height: 100dvh;
		background: white;
		justify-content: space-evenly;
		align-items: center;
		overflow-y: hidden;
		& a {
			font-size: 2vh;
			justify-content: center;
			justify-items: center;
			align-items: center;
			text-align: center;
			text-decoration: none;
			color: black;
			padding: 1vh 1vw;
			&.active {
				text-decoration: underline;
				text-transform: uppercase;
				text-underline-offset: 3px;
				font-weight: 700;
			}
			&:not(.active):hover {
				text-decoration: underline 1px;
				text-decoration-style: dashed;
				text-underline-offset: 3px;
			}
		}
	}
</style>
