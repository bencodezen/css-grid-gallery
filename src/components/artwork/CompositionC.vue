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
			<div class="rect rect-9"></div>
			<div class="rect rect-10"></div>
			<div class="rect rect-11"></div>
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
			<div class="rect rect-22"></div>
			<div class="rect rect-23"></div>
			<div class="rect rect-24"></div>
		</section>
		<h2>Inspired by Composition C</h2>
		<p>Painter: Piet Mondrian</p>
		<p>Production Date: 1920</p>
	</article>
</template>

<script>
export default {
	name: 'CompositionC'
}
</script>

<style>
.canvas {
	--black: #222;
	--gray: #494c4b;
	--blue: #345776;
	--yellow: #afb784;
	--red: #993f2d;
	--blue-gray: #9cafb6;
	--slate-gray: #7c8f9e;

	width: 500px;
	height: 500px;
	margin: 0 auto;

	display: grid;
	grid-gap: 8px;
	grid-template-columns: 40px repeat(6, 1fr) 50px;
	grid-template-rows: repeat(14, 1fr);
	grid-auto-flow: condense;

	background-color: var(--gray);
}

.rect-1 {
	grid-row: span 3;
	background-color: var(--yellow);
}

.rect-2 {
	grid-column: span 2;
	grid-row: span 3;
	background-color: var(--red);
}

.rect-3 {
	grid-column: span 4;
	background-color: var(--blue-gray);
}

.rect-4 {
	grid-row: span 3;
	background-color: var(--red);
}

.rect-5 {
	grid-column: span 2;
	grid-row: span 2;
	background-color: var(--slate-gray);
}

.rect-6 {
	grid-column: span 2;
	grid-row: span 2;
	background-color: var(--yellow);
}

.rect-7 {
	grid-row: span 6;
	background-color: var(--slate-gray);
}

.rect-8 {
	grid-column: span 2;
	grid-row: span 6;
	background-color: var(--blue);
}

.rect-9 {
	grid-column: span 2;
	grid-row: span 2;
	background-color: var(--blue);
}

.rect-10 {
	grid-row: span 2;
	background-color: var(--red);
}

.rect-11 {
	grid-row: span 2;
	background-color: var(--blue);
}

.rect-12 {
	grid-row: span 2;
	background-color: var(--blue-gray);
}

.rect-13 {
	grid-column: span 2;
	grid-row: span 4;
	background-color: var(--blue);
}

.rect-14 {
	grid-column: span 2;
	grid-row: span 4;
	background-color: var(--blue-gray);
}

.rect-15 {
	grid-row: span 4;
	background-color: var(--slate-gray);
}

.rect-16 {
	grid-row: span 5;
	background-color: var(--slate-gray);
}

.rect-17 {
	grid-row: span 2;
	grid-column: span 2;
	background-color: var(--yellow);
}

.rect-18 {
	grid-row: span 2;
	grid-column: span 2;
	background-color: var(--red);
}

.rect-19 {
	grid-column: span 2;
	grid-row: span 4;
	background-color: var(--black);
}

.rect-20 {
	grid-row: span 4;
	background-color: var(--blue);
}

.rect-21 {
	grid-row: span 2;
	grid-column: span 2;
	background-color: var(--yellow);
}

.rect-22 {
	grid-row: span 2;
	grid-column: span 2;
	background-color: var(--red);
}

.rect-23 {
	grid-column: span 6;
	background-color: var(--blue-gray);
}

.rect-24 {
	background-color: var(--blue);
}
</style>
