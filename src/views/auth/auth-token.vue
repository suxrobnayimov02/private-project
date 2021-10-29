<template>
  <div v-loading="true" class="bg-white w-100 h-100" />
</template>
<script lang="js">
import { mapActions } from 'vuex'
export default {
  created () {
    this.authLogout().then((result) => {
      console.log(this.$route.query.token)
      this.setUserToken(this.$route.query.token)
      this.getInfo()
        .then((res) => {
          if (res) {
            let roleName = 'operator'
            try {
              roleName = res.data.roles[0].name
            } catch (exp) {
              console.log(exp)
            }
            switch (roleName) {
              default : this.$router.push({ name: 'Home' }); break
            }
          } else {
            this.$router.push({ name: 'Home' })
          }
        }).catch(() => {
          this.redirectToLogin()
        })
    })
  },
  methods: {
    ...mapActions({
      getInfo: 'auth/getInfo',
      setUserToken: 'auth/setUserToken',
      authLogout: 'auth/resetToken'
    }),
    redirectToLogin () {
      // this.$store.dispatch('alert/pushError', { message: errors[401], code: 401 })
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
