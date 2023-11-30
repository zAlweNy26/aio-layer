export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.directive('blur', {
		mounted(el, binding) {
			el.style.filter = `blur(${binding.value ?? 8}px)`
			el.style['pointer-events'] = 'none'
			el.style['user-select'] = 'none'
			el.style.cursor = 'not-allowed'
		}
	})
})