import { createStore } from 'vuex'
import app from './app'
import auth from './auth'
import vacancy from './vacancy'
import region from './region'
import resources from './resources'
import education from './education'

export default createStore({
  modules: {
    app,
    auth,
    vacancy,
    region,
    resources,
    education
  }
})
