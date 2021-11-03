import ElementPlus from 'element-plus'
import { createI18n } from 'vue-i18n'
import locales from '@/locales/index'
import { getItem } from '@/utils/storage'

const i18n = createI18n({
  locale: getItem('locale') ? getItem('locale') : 'uzcl',
  fallbackLocale: 'ru',
  messages: locales
})

export default (app) => {
  app.use(ElementPlus)
  app.use(i18n)
}
