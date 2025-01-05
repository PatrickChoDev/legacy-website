<script lang="ts">
	export let title = 'Page title';
	export let sub: string = "Subtitle here, maybe it's too long?";
	export let supersub: string = '';
</script>

<div>
	<h1>{title}</h1>
	<h2>{sub}</h2>
	<h3>{supersub}</h3>
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		justify-items: center;
		align-items: center;
		padding: 10vh 0;
		h1 {
			font-size: 3vw;
			font-weight: 500;
			text-align: center;
			@media screen and (max-width: 1024px) {
				font-size: xx-large;
			}
		}
		h2 {
			font-weight: 300;
			font-size: 1vw;
			text-align: center;
			@media screen and (max-width: 1024px) {
				font-size: small;
			}
		}
		h3 {
			font-weight: 300;
			font-size: 0.8vw;
			text-align: center;
			text-decoration: dotted;
			font-style: italic;
			color: rgba(0, 0, 0, 0.6);
			@media screen and (max-width: 1024px) {
				font-size: x-small;
			}
		}
	}
</style>
