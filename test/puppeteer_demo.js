const puppeteer = require('puppeteer')
const path = require('path')

const url = 'https://movie.douban.com/tag/#/?sort=R&range=8,10&tags='



const sleep = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })
}


;(async () => {
  const browser = await puppeteer.launch({
    executablePath: path.join(__dirname, '../../chromium/Chromium.app/Contents/MacOS/Chromium')
  })
  const page = await browser.newPage()
  await page.goto(url, {
    waitUntil: 'networkidle2'
  })

  await sleep(1000)

  await page.waitForSelector('.more')

  for (var i = 0; i < 2; i ++) {
    await page.click('.more')
    await sleep(3000)
  }


  const result = await page.evaluate(() => {
    // 浏览器的上下文
    $ = window.$
    var infoList = []


    var list = $('.list-wp .cover-wp')
    
    list.each(function(index, item){
      var info = {}
      info.doubanId = ($(item).attr('data-id'))
      info.infoUrl = $(item).parent().attr('href')
      info.cover = $(item).find('img').attr('src')
      
      infoList.push(info)
    })

    
    return infoList
  })

  console.log(result)


  await browser.close()
  console.log('完成')
        
})()