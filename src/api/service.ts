import request from '/@/utils/request'
import { URL } from '/@/config/config'

// 获取随机音乐信息
export const fetchRandMusic = () => {
  return request.get(`${URL.musicUrl}/rand.music?sort=热歌榜&format=json`)
}
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
