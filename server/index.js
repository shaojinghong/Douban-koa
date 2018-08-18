const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const path = require('path')

app.use(views(path.join(__dirname, './views'), {
  extension: 'pug'
}))

app.use(async (ctx) => {
  await ctx.render('index', {
    you: '世界',
    me: 'jinghong'
  })
})


app.listen(2333)