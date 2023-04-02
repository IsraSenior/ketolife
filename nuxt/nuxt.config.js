export default {
  privateRuntimeConfig: {
    // directus: {
    //   url: process.env.DIRECTUS_URL,
    // },
  },
  publicRuntimeConfig: {
    // directus: {
    //   url: process.env.DIRECTUS_URL,
    // },
    // baseURL:
    //   process.env.BASE_URL || "https://latinoconnectionevents-org.vercel.app",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ketolife',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  loading: {
    color: "#000000",
    height: "5px",
    throttle: 0,
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    configPath: "~~/tailwind.config.js",
    exposeConfig: false,
    injectPosition: 0,
    viewer: false,
    config: {},
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'http://localhost:3000',
    headers: {
      common: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  // serverMiddleware: [{ path: "/api/directus", handler: "~/api/directus.js" }],
}
