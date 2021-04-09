declare module 'vue/types/vue' {
  // this.$myInjectedFunction inside Vue components
  interface Vue {
    link: Object
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$myInjectedFunction inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    link: Object
  }
  // nuxtContext.$myInjectedFunction
  interface Context {
    link: Object
  }
}

declare module 'vuex/types/index' {
  // this.$myInjectedFunction inside Vuex stores
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    link: Object
  }
}
