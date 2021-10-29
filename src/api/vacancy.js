import request from '@/utils/request'

export function index (query) {
  return request({
    url: '/vacancies',
    method: 'get',
    params: query
  })
}

export function show (id) {
  return request({
    url: '/vacancies/' + id,
    method: 'get'
  })
}

export function store (data) {
  return request({
    url: 'vacancies',
    method: 'post',
    data
  })
}

export function update (data) {
  return request({
    url: 'vacancies/' + data.id,
    method: 'put',
    data: data
  })
}
