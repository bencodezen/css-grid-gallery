import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import CompositionC from '@/components/artwork/CompositionC'
import CompositionWithRedYellowBlueAndBlack from '@/components/artwork/CompositionWithRedYellowBlueAndBlack'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path:
				'/',
			name:
				'HomePage',
			component: HomePage
		},
		{
			path:
				'/art/composition-c',
			name:
				'CompositionC',
			component: CompositionC
		},
		{
			path:
				'/art/composition-with-red-yellow-blue-and-black',
			name:
				'CompositionWithRedYellowBlueAndBlack',
			component: CompositionWithRedYellowBlueAndBlack
		}
	]
})
