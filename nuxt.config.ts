import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
	devtools: { enabled: true },

	typescript: {
		strict: true,
	},

	ssr: true,

	css: [
		join(currentDir, './assets/main.css')
	],

	app: {
		pageTransition: {
			name: 'page',
			mode: 'out-in',
		},
		layoutTransition: {
			name: 'layout',
			mode: 'out-in'
		},
	},

	modules: [
		'@nuxt/ui',
		'@vueuse/nuxt',
		'@pinia/nuxt',
		'nuxt-lodash',
		'@hypernym/nuxt-anime',
		'@nuxt/image',
	],

	colorMode: {
		classSuffix: '',
	},

	ui: {
		prefix: 'Nu',
		global: true,
	},

	components: [
		{
			path: '~/components',
			pathPrefix: true,
		}
	],

	lodash: {
		prefix: "_",
	},

	anime: {
		composables: true,
		autoImport: true,
	},
})
