const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const path = require('path')
const cors = require('koa2-cors')
const static = require('koa-static')

app.use(views(path.join(__dirname, './views'), {
  extension: 'pug'
}))

// 跨域中间件
// app.use(cors({
  
// }));
const staticPath = './static'

app.use(static(
  path.join( __dirname,  staticPath)
))

// app.use(async (ctx) => {
//   await ctx.render('index', {
//     you: '世界',
//     me: 'jinghong'
//   })
// })
app.use( async ( ctx ) => {
  ctx.body = 'hello world'
})



app.listen(2333)