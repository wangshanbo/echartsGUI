import request from '../plugins/axios/axios'

// 获取区域列表
export async function fetchBranchList(query) {
  return request({
    url: '/fetchlist',
    method: 'post',
    params: query
  })
}