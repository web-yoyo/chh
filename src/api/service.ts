import request from '/@/utils/request'
import https from '/@/utils/https'
import { URL } from '/@/config/config'
const prefixUrl = 'https://api.uomg.com'

// 获取随机音乐信息
export const fetchRandMusic = () => {
  return https({
    url: '/api/rand.music?sort=热歌榜&format=json',
    method: 'GET',
    prefixUrl,
  })
}
// export const fetchRandMusic = () => {
//   return request.get('/api/rand.music?sort=热歌榜&format=json')
// }
// 获取随机土味情话
export const fetchTuweiLang = () => {
  return request.get(`${URL.musicUrl}/rand.qinghua?format=json`)
}
// 获取随机照片
export const fetchImg = (type) => {
  return request.get(`${URL.musicUrl}/rand.avatar?sort=${type}&format=json`)
}
// 获取随机网易云评论
export const fetchIrc = () => {
  return request.get(`${URL.musicUrl}/comments.163?format=text`)
}

//获取随机一句话
export const fetchYiju = () => {
  return https({
    url: '/vvhan/en?type=sj',
    method: 'GET',
  })
}
// export const fetchYiju = () => {
//   return request.get(`/vvhan/en?type=sj`)
// }
