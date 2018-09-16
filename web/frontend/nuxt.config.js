module.exports = {
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['buefy'],
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  },
  css: [
    { src: '~/assets/scss/main.scss', lang: 'scss' },
    { src: '@fortawesome/fontawesome-free/scss/solid.scss', lang: 'scss' },
    { src: '@fortawesome/fontawesome-free/scss/fontawesome.scss', lang: 'scss' }
  ],
  modules: [
    'nuxt-fontawesome'
    '@nuxtjs/google-analytics', {
      id: 'UA-125865065-1'
    }
  ],
  fontawesome: {
    imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
    ],
  },
  head: {
    title: 'Turtle Explorer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Turtle Explorer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  plugins: [
    { src: '~/plugins/buefy.js', ssr: false },
    { src: '~/plugins/vue2-highcharts.js', ssr: false },
    { src: '~/plugins/daterange-picker.js', ssr: false },
    { src: '~/plugins/vue-clipboard.js', ssr: false },
    { src: '~/plugins/vue-form-wizard.js', ssr: false },
    { src: '~/plugins/vue-json-excel.js', ssr: false }
  ],
  render: {
    ssr: false
  }
}
