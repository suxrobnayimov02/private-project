export const mutations = {
  SET_ID: (state, id) => (state.user.id = id),
  SET_FULL_NAME: (state, fullname) => (state.user.fullname = fullname),
  SET_USER: (state, user) => {
    state.user.id = user.id
    state.user.login = user.login
    state.user.pin = user.pin
    state.user.data = user
  },
  SET_USER_TOKEN: (state, token) => (state.user.token = token),
  SET_IS_AUTH: (state, condition) => (state.user.is_auth = condition)
}
