<template>
  <div id="app">
		<nav>
			<ul class="nav__list">
				<li v-for="(item, index) in items"
					class="nav__item"
					:key="`nav-item-${index}`"
				>
					<router-link :to="item.path">{{ item.name }}</router-link>
				</li>
			</ul>
		</nav>
		<router-view/>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			items: []
		}
	},
	created() {
		this.$router.options.routes.forEach(route => {
			this.items.push({
				name: route.name,
				path: route.path
			})
		})
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

.nav__list {
	display: flex;
	list-style: none;
}

.nav__item {
	margin-left: 1rem;
}

.nav__item:first-child {
	margin-left: 0;
}
</style>
