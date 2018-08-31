const glob = require('glob')
const path = require('path')


glob.sync(path.resolve(__dirname, './**/*.js')).forEach(file => {
  console.log(file)
})

