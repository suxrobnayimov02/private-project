import request from '@/utils/request'

export function regions(query) {
  return request({
    url: '/resources/regions',
    method: 'get',
    params: query
  })
}
export function districts(query) {
  return request({
    url: '/resources/districts',
    method: 'get',
    params: query
  })
}
