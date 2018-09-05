module.exports = {
  head: {
    title: 'turtle-explorer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Turtle Explorer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
    { src: '~/plugins/buefy.js', ssr: true },
    { src: '~/plugins/vue2-highcharts.js', ssr: false },
    { src: '~/plugins/daterange-picker.js', ssr: false },
    { src: '~/plugins/vue-form-wizard.js', ssr: false },
    { src: '~/plugins/vue-json-excel.js', ssr: false }
  ],
  loading: { color: '#3B8070' },
  css: [
    { src: '~/assets/css/main.scss', lang: 'scss' },
    { src: 'material-design-icons-iconfont/dist/material-design-icons.scss', lang: 'scss' }
  ],
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
  }
}
