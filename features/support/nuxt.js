import { BeforeAll, AfterAll } from 'cucumber'
import { Nuxt, Builder } from 'nuxt'
import Koa from 'koa'

// Require Nuxt config
import config from '../../nuxt.config.js'

// Create a new Nuxt instance
let server

BeforeAll({ timeout: 30000 }, async () => {
  const nuxt = new Nuxt(config)
  const app = new Koa()
  await nuxt.ready()

  if (process.env.NODE_ENV !== 'production') {
    console.log(`Building nuxt...`)
    await new Builder(nuxt).build()
  }

  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Mark request as handled for Koa
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  server = app.listen(3000)
})

AfterAll(() => {
  server && server.close()
})
