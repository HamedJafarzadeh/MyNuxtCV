export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  static: {
    prefix: true
  },
  router:{
    base:'/cv/'
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Hamed Jafarzadeh CV page',
    meta: [
      { charset: 'utf-8' },
      { name: 'title', content: 'Hamed Jafarzadeh CV' },
      { name: 'description', content: 'Hamed Jafarzadeh CV' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',

    ['nuxt-fontawesome', {
      component: 'fa',
    }
    ]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set:'@fortawesome/free-brands-svg-icons',
        icons :['fab']
      }
    ]
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
