const Koa = require('koa')
const { resolve } = require('path')
const { connect, initSchemas } = require('./database/init')
const R = require('ramda')
const MIDDLEWARES = ['router', 'parcel']

;(async() => {

  const useMiddlewares = (app) => {
    R.map(
      R.compose(
        R.forEachObjIndexed(
          initWith => initWith(app)
        ),
        require,
        name => resolve(__dirname, `./middlewares/${name}`)
      )
    )(MIDDLEWARES)
  }

  try{
    // 链接数据库
    await connect()
    // 初始化Schema
    initSchemas()

  } catch (err) {
    console.log(err)
  }
  
  const app = new Koa()
  // 加载中间件
  await useMiddlewares(app)
  console.log('service is start')
  app.listen(2333)

})()

    



