import { getItem, setItem } from '@/utils/storage'
import { regions, districts } from '@/api/regions'
export const actions = {
  regions({ commit }, query) {
    return new Promise((resolve, reject) => {
      if (getItem('regions') && (getItem('regions') !== null || getItem('regions') !== [])) {
        commit('SET_REGIONS', getItem('regions'))
      } else {
        regions(query).then(res => {
          commit('SET_REGIONS', res.data)
          setItem('regions', res.data)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      }
    })
  },
  districts({ commit }, soato) {
    return new Promise((resolve, reject) => {
      const query = {
        region_soato: soato
      }
      districts(query).then(res => {
        commit('SET_DISTRICTS', res.data)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
