const puppeteer = require('puppeteer')
const path = require('path')
const base = `https://movie.douban.com/subject/`
const doubanId = '30156096'
const videoBase = `https://movie.douban.com/trailer/234383/#content`  

const sleep = time => new Promise(resolve => {
  setTimeout(resolve, time)
})

;(async () => {
  console.log('Start visit the target page')

  const browser = await puppeteer.launch({
    args: ['--no-sandbox'],
    executablePath: path.join(__dirname, '../../chromium/Chromium.app/Contents/MacOS/Chromium'),
    dumpio: false
  })

  const page = await browser.newPage()
  await page.goto(base + doubanId, {
    waitUntil: 'networkidle2'
  })

  await sleep(1000)

  // result为爬取到的数据, 包括视频页面url和cover的url
  const result = await page.evaluate(() => {
    var $ = window.$
    var it = $('.related-pic-video')
    
    if (it && it.length > 0){
      var link = it.attr('href')
      var cover = it.attr('style').match(/\(([^)]*)\)/)[1]
      return {
        link,
        cover
      }
    }
    return {}
  })


  // 获取视频url
  let video
  if (result.link) {
    await page.goto(result.link, {
      waitUntil: 'networkidle2'
    })
    await sleep(2000)

    video = await page.evaluate(() => {
      var $ = window.$
      var it = $('source')
      if (it && it.length > 0){
        return it.attr('src')
      } 
      return ''
    })
  }

  const data = {
    video,
    doubanId,
    cover: result.cover
  }


  

  browser.close()

  process.send({data})
  process.exit(0);


})()