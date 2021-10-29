import store from '@/store'

const can = ('can', {
  bind (el, binding, vnode) {
    const value = binding.value
    let hasRole = false
    const perms = store.getters['auth/USER'].permissions
    if (perms) {
      if (value && value instanceof Array) {
        hasRole = false
        value.forEach(element => {
          hasRole = hasRole || (perms.includes(element))
        })
      } else {
        hasRole = perms.includes(value)
      }
    }
    if (!hasRole) {
      el.style.display = 'none'
    }
  }
})

export default (app) => {
  app.directive(can)
}
