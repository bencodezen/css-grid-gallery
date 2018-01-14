<template>
	<article>
		<section class="canvas">
			<div class="rect rect-1"></div>
			<div class="rect rect-2"></div>
			<div class="rect rect-3"></div>
			<div class="rect rect-4"></div>
			<div class="rect rect-5"></div>
			<div class="rect rect-6"></div>
			<div class="rect rect-7"></div>
			<div class="rect rect-8"></div>
			<div class="rect rect-9">
				<div class="rect rect-10"></div>
				<div class="rect rect-11"></div>
			</div>
			<div class="rect rect-12"></div>
			<div class="rect rect-13"></div>
			<div class="rect rect-14"></div>
			<div class="rect rect-15"></div>
			<div class="rect rect-16"></div>
			<div class="rect rect-17"></div>
			<div class="rect rect-18"></div>
			<div class="rect rect-19"></div>
			<div class="rect rect-20"></div>
			<div class="rect rect-21"></div>
		</section>
		<h2>Inspired by Composition with Red Yellow Blue and Black</h2>
		<p>Painter: Piet Mondrian</p>
		<p>Production Date: 1921</p>
	</article>
</template>

<script>
export default {
	name: 'vCompositionWithRedYellowBlueAndBlack'
}
</script>

<style scoped>
.canvas {
	--yellow: #eece67;
	--red: #e33421;
	--blue: #2e0e99;

	width: 500px;
	height: 500px;
	margin: 0 auto;
	background-color: black;

	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(8, 1fr) 20px;
	grid-template-rows: repeat(7, 1fr) 25px 20px;
	grid-auto-flow: dense;
}

.rect {
	background: white;
}

.rect-1 {
	grid-column: span 2;
	grid-row: span 1;
}

.rect-2 {
	grid-column: span 3;
	grid-row: span 1;
}

.rect-3 {
	grid-column: span 3;
	grid-row: span 1;
	background-color: var(--yellow);
}

.rect-4 {
	grid-row: span 6;
}

.rect-5 {
	grid-row: span 2;
}

.rect-6 {
	grid-column: span 4;
	grid-row: span 4;
	background-color: var(--red);
}

.rect-7 {
	grid-column: span 3;
	grid-row: span 2;
	background-color: var(--yellow);
}

.rect-8 {
	grid-row: span 3;
}

.rect-9 {
	background: black;
	grid-gap: 10px;
	grid-column: span 3;
	grid-row: span 2;

	display: grid;
	grid-template-columns: 1fr 1fr;
}

.rect-10,
.rect-11 {
	grid-row: span 2;
}

.rect-12 {
	grid-column: span 2;
	grid-row: span 2;
	background-color: black;
}

.rect-13 {
	grid-column: span 2;
}

.rect-14 {
	grid-column: span 3;
}

.rect-15 {
	grid-column: span 2;
}

.rect-16 {
	grid-row: span 3;
	background-color: var(--yellow);
}

.rect-17 {
	grid-column: span 3;
	grid-row: span 2;
	background-color: var(--blue);
}

.rect-18 {
	grid-column: span 2;
	grid-row: span 2;
}

.rect-19 {
	grid-column: span 2;
	grid-row: span 1;
	background-color: black;
}

.rect-20 {
	grid-row: span 3;
	background-color: var(--red);
}

.rect-21 {
	grid-column: span 5;
}
</style>
