const childProcess = require('child_process')
const path = require('path')



;(async () => {

  // 指定爬虫脚本的路径
  const script = path.join(__dirname, '../crawler/trailer-list.js')

  // 派生一个子进程，返回ChildProcess类
  const child = childProcess.fork(script, [])

  let invoked = false

  child.on('error', (err) => {
    if (invoked) return
    invoked = true
    console.log(err)
  })

  child.on('close', code => {
    // code是子进程退出时定义的code
    if (invoked) return
    invoked = true
    let err = code === 0 ? null : new Error('exit code' + code)
    console.log(err)
  })

  // 当一个子进程使用 process.send() 发送消息时会触发 'message' 事件。
  child.on('message', data => {
    let result = data.result

    console.log(result)
  })

})()