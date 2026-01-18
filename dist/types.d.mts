import type { ModulePublicRuntimeConfig } from './module.js'

declare module '@nuxt/schema' {
  interface PublicRuntimeConfig extends ModulePublicRuntimeConfig {}
}

export { type ModuleOptions, type ModulePublicRuntimeConfig, type RefreshHandler, default } from './module.js'
