const Bundler = require('parcel-bundler')
const views = require('koa-views')
const server = require('koa-static')
const { resolve } = require('path')

const r = path => {
  return resolve(__dirname, path)
}

const bundler = new Bundler(r('../../../src/index.html'), {
  publicUrl: '/',
  watch: true
})

export const dev = async app => {
  // 构建
  await bundler.bundle()

  //启用中间件
  app.use(server(r('../../../dist')))
  app.use(views(r('../../../dist')), {
    extension: 'html'
  })

  app.use(async (ctx) => {
    await ctx.render('index')
  })
}

