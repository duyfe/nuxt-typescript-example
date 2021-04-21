import { Context } from '@nuxt/types'
import routerLink from '~/router-link'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routerPlugin = (context: Context, inject: Function) => {
  context.link = routerLink
  inject('link', routerLink)
}

export type RouterLink = typeof routerLink
export default routerPlugin
