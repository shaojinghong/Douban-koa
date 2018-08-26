const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const mongoose = require('mongoose')
const { connect, initSchemas } = require('./database/init')
const router = require('./routes/index')

const app = new Koa()

;(async() => {
  try{
    // 链接数据库
    await connect()
    // 初始化Schema
    initSchemas()
    // 爬取数据，并保存到数据库
    // require('./tasks/movies')
    // require('./tasks/api')    
  } catch (err) {
    console.log(err)
  }
})()

// koa-router的固定写法
app
  .use(router.routes())
  .use(router.allowedMethods())

app.use(views(path.join(__dirname, './views'), {
  extension: 'pug'
}))

app.use(async (ctx, next) => {
  await ctx.render('index', {
    you: '世界',
    me: 'jinghong'
  })
})


app.listen(2333)