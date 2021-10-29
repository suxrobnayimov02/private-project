import ElementPlus from 'element-plus'
// import { createI18n } from 'vue-i18n'
// import 'element-plus/lib/theme-chalk/index.css'

// import ru from 'element-plus/lib/locale/lang/ru'
// import eng from 'element-plus/lib/locale/lang/en'
// import messages from '@/assets/lang/uz-cyril-UZ.js'

// const i18n = createI18n({ locale: ru.name, fallbackLocale: eng.name, messages })

export default (app) => {
  app.use(ElementPlus)
  // app.use(i18n)
}
