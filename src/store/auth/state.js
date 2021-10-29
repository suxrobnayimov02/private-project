import { getToken } from '@/utils/auth'

export const state = {
  user: {
    is_auth: false,
    id: '',
    fullname: '',
    token: getToken(),
    region_id: 0,
    region: {},
    city_id: 0,
    city: {},
    role: {},
    pin: '',
    permissions: [],
    login: ''
  }
}
