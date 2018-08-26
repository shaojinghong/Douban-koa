const Router = require('koa-router')
const mongoose = require('mongoose')

const router = new Router()

router.get('/movies', async ( cxt ) => {

  const Movie = mongoose.model('Movie')

  //从数据库获取Movie这个model的全部数据
  const movies =  await Movie.find({}).sort({
    'meta.createdAt': -1
  })

  cxt.body = {
    movies
  }
})

router.get('/movies/:id', async ( cxt ) => {

  const id = cxt.params.id

  const Movie = mongoose.model('Movie')

  //从数据库获取Movie这个model的全部数据
  const movie =  await Movie.find({doubanId: id})

  cxt.body = {
    movie
  }
})

module.exports = router

