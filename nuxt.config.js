const isDev = process.env.NODE_ENV === 'development'

export default {
  dev: isDev,
  srcDir: './client',
  buildDir: './dist',
  generate: {
    dir: 'built'
  },
  head: {
    meta: [
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-title', content: 'devtin-unit-converter' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      {
        name: 'viewport',
        content: 'width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover'
      },
      {
        link: {
          rel: `stylesheet`,
          href: `https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap`
        }
      }]
  },
  vue: {
    config: {
      productionTip: isDev,
      devtools: isDev,
      silent: !isDev,
      performance: isDev
    }
  },
  plugins: [
    '@/plugins/element-ui'
  ],
  css: [
    '@/assets/styles.pcss',
    require.resolve('element-ui/lib/theme-chalk/reset.css'),
    require.resolve('element-ui/lib/theme-chalk/index.css')
  ],
  build: {
    postcss: {
      plugins: {
        'postcss-nested': true
      }
    }
  }
}
