const Router = require('koa-router')
const { resolve } = require('path')
const glob = require('glob')
const routerMap = new Map()
const symbolPrefix = Symbol('prefix')

export class Route {
  constructor (app, apiPath) {
    this.app = app
    this.apiPath = apiPath
    this.router = new Router()
  }

  init () {
    //把apiPath下的所有路由文件引入进来
    glob.sync(resolve(this.apiPath, './**/*.js')).forEach(require)
  }
}

const normalizePath = path => path.startsWith('/') ? path : `/${path}`

// router装饰器
const router = conf => (target, key, descriptor) => {
  config.path = normalizePath(conf.path)

}

//类装饰器
const controller = path => target => {
  target.prototype[symbolPrefix] = path
}

//get装饰器
const get = path => router({
  method: 'get',
  path: path
})