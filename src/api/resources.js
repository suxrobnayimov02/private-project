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
    url: 'seeker-skills/' + data.id,
    method: 'put',
    data: data
  })
}
