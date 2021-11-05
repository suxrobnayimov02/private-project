import request from '@/utils/request'

export function index(query) {
  return request({
    url: '/seeker-experiences',
    method: 'get',
    params: query
  })
}

export function show(id) {
  return request({
    url: '/seeker-experiences/' + id,
    method: 'get'
  })
}

export function store(data) {
  return request({
    url: 'seeker-experiences',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: 'seeker-experiences/' + data.id,
    method: 'put',
    data: data
  })
}
export function destroy(id) {
  return request({
    url: 'seeker-experiences/' + id,
    method: 'delete'
  })
}
