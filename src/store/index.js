import { createStore } from 'vuex'
import auth from './auth'
import vacancy from './vacancy'

export default createStore({
  modules: {
    auth,
    vacancy
  }
})
