import { getToken } from '@/utils/auth' // get token from cookie

export default function auth({ to, from, next, store }) {
  const hasToken = getToken()
  if ((to.name === 'Enter' || to.name === 'Home') && (hasToken === undefined || hasToken === '')) {
    return next()
  }
  if (hasToken) {
    store.dispatch('auth/getInfo').then(res => {
      let role_name = 'citizen'
      try {
        role_name = res.data.roles[0].slug
      } catch (exp) {
        console.log(exp)
      }

      if (to.name === 'Enter') {
        switch (role_name) {
          case 'citizen':
            return next({ name: 'Resume' })
          case 'company':
            return next({ name: 'CompanyVacancies' })
        }
      }
      if (to.name === 'Home') {
        switch (role_name) {
          case 'citizen':
            return next({ name: 'Home' })
          case 'company':
            return next({ name: 'CompanyVacancies' })
        }
      }
      return next()
    })
      .catch(err => {
        console.log(err)
        store.dispatch('auth/resetToken')
        next({ name: 'Home' })
      })
  } else {
    return next({ name: 'Home' })
  }
}
