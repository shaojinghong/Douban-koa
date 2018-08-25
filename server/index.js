const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const mongoose = require('mongoose')
const { connect, initSchemas } = require('./database/init')

const app = new Koa()

;(async() => {
  try{
    await connect()
    // initSchemas()

    // const Movie = mongoose.model('Movie')
    // const movies = await Movie.find({})

    // console.log(movies)

  } catch (err) {
    console.log(err)
  }
})()

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