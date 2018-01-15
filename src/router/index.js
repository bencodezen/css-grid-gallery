import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import CompositionC from '@/components/artwork/CompositionC'
import CompositionII from '@/components/artwork/CompositionII'
import CompositionWithRedYellowBlueAndBlack from '@/components/artwork/CompositionWithRedYellowBlueAndBlack'
import DilatedGrid from '@/components/artwork/DilatedGrid'

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
				'/art/dilated-grid',
			name:
				'DilatedGrid',
			component: DilatedGrid
		},
		{
			path:
				'/art/composition-ii',
			name:
				'CompositionII',
			component: CompositionII
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
