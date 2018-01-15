<template>
	<article>
		<section class="canvas">
			<div v-for="(tile, index) in tiles"
				class="tile"
				:key="`tile-${index}`"
			>
				<div class="corner ga-ul" :style="`--color: var(--${tile.upperLeftColor})`"></div>
				<div class="corner ga-ur" :style="`--color: var(--${tile.upperRightColor})`"></div>
				<div class="corner ga-bl" :style="`--color: var(--${tile.bottomLeftColor})`"></div>
				<div class="corner ga-br" :style="`--color: var(--${tile.bottomRightColor})`"></div>
				<div class="circle" :style="`--color: var(--${tile.outerCircleColor})`">
					<div class="circle middle" :style="`--color: var(--${tile.middleCircleColor})`">
						<div class="circle inner" :style="`--color: var(--${tile.innerCircleColor})`"></div>
					</div>
				</div>
			</div>
		</section>
		<h2>Inspired by Dilated Grid</h2>
		<p>Artist: Matt W. Moore</p>
		<p>Production Date: 2010</p>
	</article>
</template>

<script>
export default {
	name: 'DilatedGrid',
	data() {
		return {
			tiles: []
		}
	},
	methods: {
		generateColor() {
			const colors = ['red', 'black', 'orange']

			return colors[Math.floor(Math.random() * colors.length)]
		},
		generateTiles(n) {
			const tileList = []
			const tileProperties = [
				'upperRightColor',
				'upperLeftColor',
				'bottomRightColor',
				'bottomLeftColor',
				'outerCircleColor',
				'middleCircleColor',
				'innerCircleColor'
			]

			for (let i = 0; i < n; i++) {
				const tile = {}

				for (let j = 0; j < tileProperties.length; j++) {
					const property = tileProperties[j]

					tile[property] = this.generateColor()
				}

				tileList.push(tile)
			}

			return tileList
		}
	},
	created() {
		this.tiles = this.generateTiles(36)
	}
}
</script>

<style scoped>
.canvas {
	--red: #ee1c25;
	--black: #000;
	--orange: #f6941d;

	width: 500px;
	height: 500px;
	margin: 0 auto;

	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: repeat(6, 1fr);
	grid-auto-flow: dense;
}

.tile {
	background-color: var(--red);

	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-template-areas: 'upper-left upper-right' 'bottom-left bottom-right';
}

.corner {
	grid-area: var(--area);
	background-color: var(--color);
}

.corner.ga-ul {
	--area: upper-left;
}

.corner.ga-ur {
	--area: upper-right;
}

.corner.ga-bl {
	--area: bottom-left;
}

.corner.ga-br {
	--area: bottom-right;
}

.circle {
	grid-column: 1 / -1;
	grid-row: 1 / -1;
	background-color: var(--color);
	border-radius: 50%;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	justify-items: center;
	align-items: center;
}

.circle.middle {
	background-color: var(--color);
	width: 75%;
	height: 75%;
}

.circle.inner {
	background-color: var(--color);
	width: 50%;
	height: 50%;
}
</style>
