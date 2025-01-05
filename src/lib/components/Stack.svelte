<script lang="ts">
	import { fade } from 'svelte/transition';
	export let img_src: string;
	export let alt: string = 'Image';
</script>

<div in:fade out:fade|global>
	<img src={img_src} {alt} />
	<div class="tooltip">{alt}</div>
</div>

<style lang="scss">
	div {
		margin: 2vh 4vw;
		width: 8vmin;
		height: 8vmin;
		@media (max-width: 1024px) {
			width: 12vmin;
			height: 12vmin;
		}
		@media (max-width: 768px) {
			width: 18vmin;
			height: 18vmin;
		}
		flex: 1 1 0.2;

		&:hover div.tooltip {
			opacity: 1;
		}

		& div.tooltip {
			position: absolute;
			background: rgba(0, 0, 0, 0.8);
			color: white;
			height: fit-content;
			width: fit-content;
			padding: 0.2rem 0.4rem;
			border-radius: 4px;
			font-size: 0.8rem;
			opacity: 0;
			transition: opacity 0.2s;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
</style>
