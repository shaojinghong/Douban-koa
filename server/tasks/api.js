//  http://api.douban.com/v2/movie/subject/1764796

const rp = require('request-promise-native')

async function fetchMovie (item){
  const url = `http://api.douban.com/v2/movie/subject/${item.doubanId}`
  const res = await rp(url)
  return res
}


;(async () => {
  
  let movies = [
    { doubanId: 27077785,
      title: '风骚律师 第四季',
      rate: 9.7,
      poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2526785183.jpg' 
    },
    { doubanId: 30203507,
      title: 'EERIE~看不见的脸',
      rate: 7.8,
      poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2530855415.jpg' 
    },
    { doubanId: 26359235,
      title: '克里斯托弗·罗宾',
      rate: 8.3,
      poster:
      'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2523016274.jpg' 
    }]
    
  movies.map(async movie => {
    let movieData = await fetchMovie(movie)
    try {
      movieData = JSON.parse(movieData);
      console.log(movieData.title)
    } catch (err) {
      console.log(err)
    }
  })
  
})()

