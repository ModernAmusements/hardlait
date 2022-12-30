import postcssPresetEnv from 'postcss-preset-env'
import postcssEasingGradients from 'postcss-easing-gradients'
import * as SITE_INFO from './content/site/info.json'
import { COLOR_MODE_FALLBACK } from './utils/globals.js'
export default {
  target: 'static',
  components: true,
  ssr: false,
  generate: {
    fallback: true,
  },
  env: {
    url:
      process.env.NODE_ENV === 'production'
        ? process.env.URL || 'http://createADotEnvFileAndSetURL'
        : 'https://hardlait.netlify.app/',
    lang: SITE_INFO.sitelang || 'en-US',
  },
  /*
   ** Headers of the page
   */
  head: {
    title: SITE_INFO.sitename || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: SITE_INFO.sitedescription || process.env.npm_package_description || '',
      },
      { name: 'theme_color', content: '#fe5550' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' }],
    __dangerouslyDisableSanitizers: ['noscript'],
  },
  loading: '~/components/loading.vue',
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.pcss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-content-placeholders.js'],
  /*
   ** Nuxt.js dev-modules
   */
  // buildModules: ['@nuxtjs/color-mode', '@nuxtjs/tailwindcss', '@nuxtjs/svg', '@nuxtjs/pwa', '@nuxt/image'],
  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/svg'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content', 'nuxt-purgecss'],
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        'postcss-preset-env': postcssPresetEnv({
          stage: 1,
          features: {
            'nesting-rules': false,
          },
        }),
        'postcss-easing-gradients': postcssEasingGradients,
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  /*
   ** Custom additions configuration
   */
  // ? The content property: https://content.nuxtjs.org/configuration
  content: {
    dir: 'content',
  },
  tailwindcss: {
    viewer: false, // disabled because it causes `Error: Cannot find module 'tailwindcss/resolveConfig'`, fixed in https://github.com/nuxt-community/tailwindcss-module/pull/303
    cssPath: '~/assets/css/main.pcss',
    exposeConfig: false, // enables `import { theme } from '~tailwind.config'`
  },
  purgeCSS: {
    mode: 'postcss',
    // ? Safelisting docs: https://purgecss.com/safelisting.html
    safelist: {
      // standard: [],
      deep: [/dark/, /light/, /btn/, /icon/, /main/],
      greedy: [/^card/, /image$/, /title$/, /^nuxt-content/, /code/, /pre/, /token/, /^vue-content-placeholders/],
    },
  },
  colorMode: {
    classSuffix: 'dark',
    preference: 'system', // default value of $colorMode.preference
    fallback: COLOR_MODE_FALLBACK, // fallback value if not system preference found
    componentName: 'ColorScheme',
    cookie: {
      options: {
        sameSite: 'lax',
      },
    },
  },
  // pwa: {
  //   icon: {
  //     source: 'static/icon.png',
  //     filename: 'icon.png',
  //   },
  //   manifest: { name: SITE_INFO.sitename || process.env.npm_package_name || '', lang: process.env.lang },
  //   meta: {
  //     name: SITE_INFO.sitename || process.env.npm_package_name || '',
  //     lang: process.env.lang,
  //     ogHost: process.env.URL,
  //     ogImage: '/preview.jpg',
  //     theme_color: '#fe5550',
  //   },
  // },
}
