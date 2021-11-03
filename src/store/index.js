import { createStore } from 'vuex'
import app from './app'
import auth from './auth'
import vacancy from './vacancy'
import region from './region'

export default createStore({
  modules: {
    app,
    auth,
    vacancy,
    region
  }
})
