import { index, store_seeker_skills, get_seeker_skills, update_seeker_skills, delete_seeker_skills, kodp } from '@/api/resources'
export const actions = {
  index({ commit }, query) {
    return new Promise((resolve, reject) => {
      index(query).then(res => {
        commit('SET_RESUME_CONFIGS', res.data)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  positions({ commit }, query) {
    return new Promise((resolve, reject) => {
      kodp(query).then(res => {
        commit('SET_POSITIONS', res.data)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  store_seeker_skills({ commit }, data) {
    return new Promise((resolve, reject) => {
      store_seeker_skills(data).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  get_seeker_skills({ commit }, data) {
    return new Promise((resolve, reject) => {
      get_seeker_skills(data)
        .then(res => {
          commit('SET_SKILLS', res.data)
          resolve(res)
        }).catch(res => {
          reject(res)
        })
    })
  },
  update_seeker_skills({ commit }, data) {
    return new Promise((resolve, reject) => {
      update_seeker_skills(data)
        .then(res => {
          resolve(res)
        }).catch(res => {
          reject(res)
        })
    })
  },
  delete_seeker_skills({ commit }, data) {
    return new Promise((resolve, reject) => {
      delete_seeker_skills(data)
        .then(res => {
          resolve(res)
        }).catch(res => {
          reject(res)
        })
    })
  }
}
