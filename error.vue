<script setup lang="ts">
import type { H3Error } from 'h3'

const props = defineProps<{
  error: H3Error
}>()

const { error } = toRefs(props)

const { error: errorText } = useAppConfig().aio

const errorMessage = computed(() => {
	switch(error.value.statusCode) {
    case 404:
      return 'The page you are looking for does not exist.'
    case 401:
      return 'You are not authenticated, so you cannot access this page.'
    case 403:
      return 'You are not authorized to access this page.'
    case 500:
      return 'Something went wrong. Please try again later.'
    default:
      return error.value.statusMessage
	}
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="flex h-screen w-screen flex-col items-center justify-evenly gap-12 text-center">
    <div class="flex flex-col gap-4 text-5xl font-bold">
      <span class="text-red-600">{{ error.statusCode }}</span>
      <span>{{ errorText }}</span>
      <span class="text-2xl text-red-600">{{ errorMessage }}</span>
    </div>
    <NuButton
      label="Go back to Home"
      color="red"
      size="xl"
      @click="handleError"
    />
  </div>
</template>