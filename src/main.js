import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import global from './mixins/global'
import './registerServiceWorker'
import '@/assets/scss/main.scss'
// directives
import './directive/index'
// css
import 'element-plus/dist/index.css'
import './assets/css/main.css'

import installElementPlus from './plugins/element'
// import { formatPrice } from '@/filters/report'

// import './assets/css/main.css'
const app = createApp(App)
installElementPlus(app)
app
  .use(store)
  .use(router)
  .mixin(global)
  // .filter('formatPrice', formatPrice)
  .mount('#app')
