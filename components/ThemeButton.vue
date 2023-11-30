<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
	get() {
		return colorMode.value === 'dark'
	},
	set() {
		colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
	}
})
</script>

<template>
  <ClientOnly>
    <NuButton
      :icon="isDark ? 'i-fluent-weather-sunny-24-filled' : 'i-fluent-weather-moon-24-filled'"
      color="white"
      variant="solid"
      aria-label="Change Theme"
      @click="isDark = !isDark"
    />
    <template #fallback>
      <div class="h-8 w-8" />
    </template>
  </ClientOnly>
</template>