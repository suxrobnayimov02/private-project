import { show, update, index, store } from '@/api/education'
export const actions = {
  index({ commit }, query) {
    return new Promise((resolve, reject) => {
      index(query).then(res => {
        commit('SET_VACANCIES', res.data)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  show({ commit }, id) {
    return new Promise((resolve, reject) => {
      show(id).then(res => {
        commit('SET_VACANCY', res.result.help)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  store({ commit }, data) {
    return new Promise((resolve, reject) => {
      store(data)
        .then(res => {
          resolve(res)
        })
        .catch((res) => {
          reject(res)
        })
    })
  },
  update({ commit }, data) {
    return new Promise((resolve, reject) => {
      update(data)
        .then(res => {
          resolve(res)
        }).catch(res => {
          reject(res)
        })
    })
  }
}
