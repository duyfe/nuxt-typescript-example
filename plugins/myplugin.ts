import { Plugin } from '@nuxt/types'

declare module '@nuxt/types' {
  interface Context {
    $myInjectedFunction(message: string): void
  }
}

const myPlugin: Plugin = (context) => {
  context.$myInjectedFunction = (message: string) => console.log(message)
}

export default myPlugin
