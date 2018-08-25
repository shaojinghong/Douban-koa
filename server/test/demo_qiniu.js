const qiniu = require('qiniu')

const accessKey = 'zs1z8SfbXLuntIEMzlE6P9-B6yu02EUcA0EcBZ0U'
const secretKey = 'BJYJ1lkWOAJcpyAYwC_MF1FPJ9Lt4i6Xu7JfrdOE'
// 鉴权对象mac
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
const config = new qiniu.conf.Config();
config.zone = qiniu.zone.Zone_z1

// 资源管理的操作对象
const bucketManager = new qiniu.rs.BucketManager(mac, config);

const url = 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2530772196.jpg'
const bucket = 'images'
const key = 'jinghong.png'

// 回调方式
bucketManager.fetch(url, bucket, key, (err, respBody, respInfo) => {
  if (err) {
    console.log(`发生异常${err}`)
  } else {
    if (respInfo.statusCode === 200) {
      console.log(`key: ${respBody.key} Hash: ${respBody.hash} 
        fsize: ${respBody.fsize} mimeType: ${respBody.mimeType}`)
    } else {
      console.log('错误status', respInfo.statusCode)
      console.log(respBody);
    }
  }
})

// 封装成promise
const uploadQiniu = (url, bucket, key) => {
  // 返回一个promise对象
  return new Promise((resolve, reject) => {
    bucketManager.fetch(url, bucket, key, (err, resBody, resInfo) => {
      if (err) {
        reject(err)
      } else {
        if (resInfo.statusCode === 200) {
          resolve(resBody.key)
        } else {
          console.log(`错误状态码:${resInfo.statusCode}`)
        }
      }
    })
  })
}

then/catch方法调用
uploadQiniu(url, bucket, key).then((resKey) => {
  console.log(resKey)
}).catch((err) => {
  console.log(`初始化${err}`)
})

// async/await方法调用
;(async () => {
  console.log('start upload')
  try {
    const newKey = await uploadQiniu(url, bucket, key)
    console.log(`上传结束，更新的key为${newKey}`)
  } catch (err) {
    console.log(err)
  }
})()


