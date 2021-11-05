import request from '@/utils/request'

export function index(query) {
  return request({
    url: '/seeker-educations',
    method: 'get',
    params: query
  })
}

export function show(id) {
  return request({
    url: '/seeker-educations/' + id,
    method: 'get'
  })
}

export function store(data) {
  return request({
    url: 'seeker-educations',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: 'seeker-educations/' + data.id,
    method: 'put',
    data: data
  })
}
