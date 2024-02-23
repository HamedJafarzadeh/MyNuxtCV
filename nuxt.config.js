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
      { name: 'google-site-verification', content: 'xxx' },
      { name: 'og:url', content: 'http://hamedjafarzadeh.github.io/cv' },
      { name: 'og:title', content: 'Hamed Jafarzadeh CV' },
      { name: 'og:description', content: 'I am computer and electronics engineer with over 5 years of software and hardware programming experiences in industry and academic projects' },
      { name: 'og:image', content: 'imgs/profile.jpg' },
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
    { src: '~plugins/googleanalytics.js', mode: 'client' },
    // { src: '~plugins/hjanalytics.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/google-fonts',
    ['nuxt-fontawesome', {
      component: 'fa',
    }
    ]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: true,
        Inter: [400, 700],
        'Josefin+Sans': true,
        Lato: [100, 300],
        Raleway: {
          wght: [100, 400],
          ital: [100]
        },
        Inter: '200..700',
        'Crimson Pro': {
          wght: '200..900',
          ital: '200..700',
        }
      }
  }],
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
