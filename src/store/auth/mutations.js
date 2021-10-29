export const mutations = {
  SET_ID: (state, id) => (state.user.id = id),
  SET_FULL_NAME: (state, fullname) => (state.user.fullname = fullname),
  SET_USER: (state, user) => {
    state.user.id = user.id
    state.user.region_id = user.region_id
    state.user.city_id = user.city_id
    state.user.region = user.region ? user.region : {}
    state.user.city = user.city ? user.city : {}
    // state.user.role = user.roles[0]
    state.user.login = user.login
    state.user.pin = user.pin
  },
  SET_USER_TOKEN: (state, token) => (state.user.token = token),
  SET_IS_AUTH: (state, condition) => (state.user.is_auth = condition)
}
