<div>
	<div class="red"></div>
	<div class="yellow"></div>
	<div class="green"></div>
	<div class="blue"></div>
</div>

<style lang="scss">
	div {
		max-width: 100vw;
		margin: 0;
		display: flex;
		flex-direction: row;
		height: 10px;

		& div {
			flex: 1;
		}
		& div.red {
			background: #df0e62;
		}
		& div.yellow {
			background: #fac70b;
		}
		& div.green {
			background: #127681;
		}
		& div.blue {
			background: #21174a;
		}
	}
</style>
