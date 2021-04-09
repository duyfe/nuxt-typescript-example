import { Context } from '@nuxt/types'
import routerLink from '~/router-link'

const routerPlugin = (context: Context, inject: Function) => {
  context.link = routerLink
  inject('link', routerLink)
}

export default routerPlugin
