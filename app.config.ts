export default defineAppConfig({
  aio: {
    error: 'Page Not Accessible'
  },

  ui: {
    button: {
      base: 'transition-colors',
    },
    input: {
      base: 'transition-shadow',
    },
    textarea: {
      base: 'transition-shadow',
    },
    selectMenu: {
      base: 'w-fit'
    }
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    aio?: {
      /** Error page text to show */
      error?: string
    }
  }
}
