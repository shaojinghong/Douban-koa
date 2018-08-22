var rp = require('request-promise-native')

rp('https://api.tuchong.com/feed-app?os_api=22&device_type=MI&device_platform=android&ssmix=a&manifest_version_code=232&dpi=400&abflag=0&uuid=651384659521356&version_code=232&app_name=tuchong&version_name=2.3.2&openudid=65143269dafd1f3a5&resolution=1280*1000&os_version=5.8.1&ac=wifi&aid=0&page=1&type=refresh')
  .then((data) => {
    console.log(JSON.parse(data))
  })
  .catch((err) => {
    console.log('请求失败')
  })