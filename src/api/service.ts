import https from '/@/utils/https'
const prefixUrl = 'https://api.uomg.com'
const prefixBUrl = 'https://api.vvhan.com/api'

// 获取随机音乐信息
export const fetchRandMusic = () => {
  return https({
    url: '/api/rand.music?sort=热歌榜&format=json',
    method: 'GET',
    prefixUrl,
  })
}

// 获取随机土味情话
export const fetchTuweiLang = () => {
  return https({
    url: '/api/rand.qinghua?format=json',
    method: 'GET',
    prefixUrl,
  })
}
// 获取随机照片
export const fetchImg = (type) => {
  return https({
    url: `/api/rand.avatar?sort=${type}&format=json`,
    method: 'GET',
    prefixUrl,
  })
}
// 获取随机网易云评论
export const fetchIrc = () => {
  return https({
    url: `/api/comments.163?format=text`,
    method: 'GET',
    prefixUrl,
  })
}

//获取随机一句话
export const fetchYiju = () => {
  return https({
    url: '/vvhan/en?type=sj',
    method: 'GET',
    isDelProd: true, //是否在生产环境删除前缀/xxx/
    prefixUrl: prefixBUrl,
  })
}
//获取微博热搜
export const fetchWbhot = () => {
  return https({
    url: '/vvhan/wbhot',
    method: 'GET',
    isDelProd: true, //是否在生产环境删除前缀/xxx/
    prefixUrl: prefixBUrl,
  })
}
