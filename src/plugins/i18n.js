import VueI18n from 'vue-i18n'
import locales from '@/locales/index'
import { getItem } from '@/utils/storage'

export default new VueI18n({
  locale: getItem('locale') ? getItem('locale') : 'uzcl',
  fallbackLocale: 'ru',
  messages: locales
})
