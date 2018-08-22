const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const path = require('path')

app.use(views(path.join(__dirname, './views'), {
  extension: 'pug'
}))

// 跨域中间件
// app.use(cors({
  
// }));

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