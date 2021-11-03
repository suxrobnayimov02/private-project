import Cookies from 'js-cookie'
import { i18n } from '../../plugins/element'
import { setItem, getItem } from '@/utils/storage'

const state = {
  filter: {
    sort: '',
    soato: '',
    company_tin: '',
    position_name: '',
    sort_direction: '',
    vacancy_immediately: 1,
    showFavourites: false,
    appeals: false,
    status: null
  },
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  locale: getItem('locale') ? getItem('locale') : 'ru',
  locales: [
    {
      'url': 'uzcl',
      'name': 'Ўзбекча'
    },
    {
      'url': 'uzln',
      'name': 'O’zbekcha'
    },
    {
      'url': 'ru',
      'name': 'Русский'
    }
  ],
  device: 'desktop'
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  SET_LOCALE: (state, locale) => (state.locale = locale),
  SET_FILTER: (state, filter) => {
    state.filter.sort_direction = filter.sort_direction
    state.filter.position_name = filter.position_name
    state.filter.soato = filter.soato
    state.filter.sort = filter.sort
    state.filter.company_tin = filter.company_tin
    state.filter.page = filter.page
    state.filter.pages = filter.pages
    state.filter.appeals = filter.appeals ? filter.appeals : state.filter.appeals
    state.filter.showFavourites = filter.showFavourites ? filter.showFavourites : state.filter.showFavourites
    state.filter.status = filter.status_id ? filter.status_id : null
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  }
}
const getters = {
  LOCALE: (state) => state.locale,
  FILTER: (state) => state.filter,
  LOCALES: (state) => state.locales
}
const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  changeLocale({ commit }, locale) {
    i18n.locale = locale
    commit('SET_LOCALE', locale)
    setItem('locale', locale)
    return locale
  },
  getFilter({ commit }, filter) {
    commit('SET_FILTER', filter)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
