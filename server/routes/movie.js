const { 
  getAllMovies,
  getMovieDetial,
  getRelativeMovies
} = require('../service/movie');

const mongoose = require('mongoose')
const { controller, get, post, put } = require('../lib/decorator')


@controller('/api/v0/movies')
export class movieController {

  @get('/')
  async getMovies (ctx, next) {

    const {type, year} = ctx.query
    const movies = await getAllMovies(type, year)

    ctx.body = {
      movies
    }
  }


  @get('/:id')
  async getMovieDetial(ctx, next) {

    const id = ctx.params.id
    const movie = await getMovieDetial(id)
    const relativeMovies = await getRelativeMovies
  
    ctx.body = {
      data: {
        movie,
        relativeMovies
      },
      success: true
    }

  }

}


