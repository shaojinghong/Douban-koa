const util = require('util')
const { readFile } = require('fs')
const path = require('path')

// readFileAsync = util.promisify(readFile)

// promise then的写法
// readFileAsync(path.join(__dirname, 'test.txt'), 'utf8').then((data) => {
//   console.log(`文件内容为:${data}` )
// }).catch((error) => {
//   console.log(error)
// })

// 或者使用sync函数 , 一个自执行的异步函数
// ;(async () => {
//    const data = await readFileAsync(path.join(__dirname, 'test.txt'), 'utf8')
//    const data_2 = await readFileAsync(path.join(__dirname, 'test_2.txt'), 'utf8')

//   console.log(data, data_2)
// })()


// ;(function * (){
//   const data1 = yield readFileAsync(path.join(__dirname, 'test.txt'), 'utf8')
//   const data2 = yield readFileAsync(path.join(__dirname, 'test_2.txt'), 'utf8')

//   console.log(data1)
//   console.log(data2)
//   console.log('faf');

// })()


// 自己包装promise

const testPath = path.join(__dirname, 'test.txt')

const readFileAsync = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (data, err) => {
      if (data) resolve(data)
      else reject(err)
    })
  })
}

// readFileAsync(testPath).then((data) => {
//   console.log(data)
// }, (err) => {
//   console.log(err)
// })

// ;(async () => {
//   try {
//     const data = await readFileAsync(testPath)
//     console.log(data)
//   } catch (err) {
//     console.log(err)
//   }
// })()


;(async () => {
  await readFile(testPath, 'uff8')
})().then((data) => {
  console.log(data)
}, (err) => {
  console.log(err)
})



