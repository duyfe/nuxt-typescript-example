import router from './router-link'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-ts',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.12.1/polyfill.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.1.3/pixi.min.js' },
      { src: '/data/spine-boy/pixi-spine.js' }
    ],
    __dangerouslyDisableSanitizers: ['script', 'noscript']
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/vue-scrollto',
    '~plugins/router-link'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/common/'
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://typescript.nuxtjs.org/guide/setup/
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://content.nuxtjs.org/
    '@nuxt/content',
    // https://www.npmjs.com/package/vue-scrollto
    'vue-scrollto/nuxt'
  ],

  content: {
    liveEdit: false,
    // Only search in title and description
    fullTextSearchFields: ['title', 'description']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  router: {
    trailingSlash: true
  },

  generate: {
    fallback: false,
    crawler: false,
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content('news/detail').only(['slug']).fetch()
      if (files.length === 0) { return [] }

      return files.map(news => router.newsDetailPage(parseInt(news.slug)))
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, { isClient, isDev }) {
      // Extend only webpack config for client-bundle
      config.devtool = isClient ? 'source-map' : ''

      if (isDev && isClient) {
        // Run eslint on save
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    extractCSS: true,
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    // Combine media query
    postcss: {
      plugins: {
        'postcss-combine-media-query': {}
      }
    }
  }
}
