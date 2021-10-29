import { getToken } from '@/utils/auth' // get token from cookie

export default function auth ({ to, from, next, store }) {
  const hasToken = getToken()
  if (hasToken) {
    store.dispatch('auth/getInfo')
      .then(res => {
        // let role_name = 'city_sector'
        // try {
        //   role_name = res.result.user.roles[0].name
        // } catch (exp) {
        //   console.log(exp)
        // }
        // if (to.name === 'Login') {
        //   switch (role_name) {
        //     default : return next({ name: 'Home' })
        //   }
        // }
        return next()
      })
      .catch(err => {
        console.log(err)
        store.dispatch('auth/resetToken')
        next()
      })
  } else {
    return next()
  }
}
