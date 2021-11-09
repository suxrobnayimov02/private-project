import request from '@/utils/request'

// resume-configs
export function index(query) {
  return request({
    url: '/resources/resume-configs',
    method: 'get',
    params: query
  })
}

// citizen seeker_skills
export function store_seeker_skills(data) {
  return request({
    url: 'seeker-skills',
    method: 'post',
    data
  })
}
export function get_seeker_skills(query) {
  return request({
    url: 'seeker-skills',
    method: 'get',
    params: query
  })
}

export function update_seeker_skills(data) {
  return request({
    url: 'seeker-skills/' + data.user_id,
    method: 'put',
    data: data
  })
}
export function kodp(params) {
  return request({
    url: 'resources/kodp/',
    method: 'get',
    params
  })
}
export function delete_seeker_skills(id) {
  return request({
    url: 'seeker-skills/' + id,
    method: 'delete'
  })
}
export function update_seeker_profiles(data) {
  return request({
    url: 'seeker-profiles/' + data.id,
    method: 'put',
    data: data
  })
}
export function get_seeker_profile(params) {
  return request({
    url: 'seeker-profiles/' + params.user_id,
    method: 'get',
    params
  })
}

export function store_work_seeker(data) {
  return request({
    url: 'seeker-wanted-works',
    method: 'post',
    data
  })
}

export function get_work_seeker(params) {
  return request({
    url: 'seeker-wanted-works/' + params.user_id,
    method: 'get',
    params
  })
}

export function get_work_seekers(data) {
  return request({
    url: 'seeker-wanted-works',
    method: 'get',
    data
  })
}
export function filterableNskz() {
  return request({
    url: 'resources/filterable-nskz',
    method: 'get'
  })
}
