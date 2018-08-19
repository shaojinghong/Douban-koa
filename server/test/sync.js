

const doSync = (thing, time) => new Promise(
    resolve => {
      setTimeout(() => {
        console.log(thing, '用了' + time + '毫秒')
        resolve()
      }, time)
    })

const jinghong = {
  doSync
}
const meizi = {
  doSync
}


;(async () => {
  console.log('case 1 : 妹子来到门口')
  await jinghong.doSync('jinghong刷牙', 1000)
  console.log('do nothing and waiting')
  await meizi.doSync('妹子洗澡', 2000)
  console.log('妹子忙别的事情去了')

})() 