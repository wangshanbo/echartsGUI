import request from '../plugins/axios/axios'

// 获取区域列表
export function fetchRegionList(query) {
  return request({
    url: '/fetchlist',
    method: 'post',
    params: query
  })
}