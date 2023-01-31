// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'normalize.css/normalize.css',
    'assets/styles/main.scss'
  ],
	vite: {
		css: {
				preprocessorOptions: {
						sass: {
								additionalData: '@import "~/assets/styles/vars.scss"',
						},
				},
		},
},
})
