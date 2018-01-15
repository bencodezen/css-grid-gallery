<template>
	<article>
		<section class="canvas">
			<div class="rect-1">
				<div class="rect-2">
					<div class="rect-2a"></div>
					<div class="rect-2b"></div>
				</div>
				<div class="rect-3"></div>
			</div>
			<div class="rect-1">
				<div class="rect-4"></div>
				<div class="rect-5">
					<div class="rect-5a"></div>
					<div class="rect-5b">
						<div class="rect-6"></div>
						<div class="rect-7"></div>
					</div>
				</div>
			</div>
		</section>
		<h2>Inspired by Composition II in Red, Blue and Yellow</h2>
		<p>Painter: Piet Mondrian</p>
		<p>Production Date: 1930</p>
	</article>
</template>

<script>
export default {
	name: 'CompositionII'
}
</script>

<style scoped>
.canvas {
	--red: #7e1300;
	--blue: #0f1c3f;
	--yellow: #d39502;
	--white: #edf3d1;

	--main-border-width: 15px;
	--secondary-border-width: 20px;

	width: 500px;
	height: 500px;
	margin: 0 auto;
	background-color: black;

	display: grid;
	grid-gap: var(--main-border-width);
	grid-template-columns: 1fr;
	grid-template-rows: 3fr 1fr;
	grid-auto-flow: dense;
}

.rect-1 {
	grid-column: 1 / -1;
	background-color: black;

	display: grid;
	grid-gap: var(--main-border-width);
	grid-template-columns: 1fr 3fr;
}

.rect-2 {
	background-color: black;
	grid-column: span 1;

	display: grid;
	grid-gap: var(--secondary-border-width);
	grid-row: 1fr 1fr;
}

.rect-2a,
.rect-2b {
	background-color: var(--white);
	grid-column: span 1;
}

.rect-3 {
	background-color: var(--red);
	grid-column: span 1;
}

.rect-4 {
	background-color: var(--blue);
}

.rect-5 {
	background-color: black;

	display: grid;
	grid-gap: var(--main-border-width);
	grid-template-columns: 1fr 30px;
}

.rect-5a {
	background-color: var(--white);
	grid-column: span 1;
}

.rect-5b {
	background-color: black;
	grid-column: span 1;

	display: grid;
	grid-gap: var(--main-border-width);
	grid-template-rows: 1fr 1fr;
}

.rect-6 {
	background-color: var(--white);
}

.rect-7 {
	background-color: var(--yellow);
}
</style>
