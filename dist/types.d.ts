import type { ModulePublicRuntimeConfig } from './module'

declare module '@nuxt/schema' {
  interface PublicRuntimeConfig extends ModulePublicRuntimeConfig {}
}

export { type ModuleOptions, type ModulePublicRuntimeConfig, type RefreshHandler, default } from './module'
