<template>
  <div class="bg-white">
    <loading
      v-model="isLoading"
      :can-cancel="true"
      :is-full-page="fullPage"
      color="rgb(49, 134, 251)"
      loader="bars"
      :opacity="loading.opacity"
      :height="loading.height"
      :width="loading.width"
    />
  </div>
</template>
<script lang="js">
import { mapActions } from 'vuex'
import Loading from 'vue-loading-overlay'

import { setToken } from '@/utils/auth'
export default {
  components: {
    Loading
  },
  data() {
    return {
      loading: {
        opacity: 1,
        width: 70,
        height: 70
      },
      isLoading: true,
      fullPage: true
    }
  },
  created() {
    this.authLogout().then((result) => {
      const query = this.$route.query
      if (query.token) {
        setToken(query.token)
        this.setUserToken(query.token)
        this.getInfo()
          .then((data) => {
            if (data['success']) {
              if (data.data.roles[0].slug === 'citizen') {
                this.$router.push({ name: 'CitizenShow', params: { id: data.data.id }, query: { id: data.data.id }})
              } else {
                this.$router.push({ name: 'CompanyVacancies' })
              }
            }
          })
          .catch(() => {
            this.redirectToLogin()
          })
      } else {
        this.redirectToLogin()
      }
    })
  },
  methods: {
    ...mapActions({
      getInfo: 'auth/getInfo',
      setUserToken: 'auth/setUserToken',
      authLogout: 'auth/resetToken'
    }),
    redirectToLogin() {
      // this.$store.dispatch('alert/pushError', { message: errors[401], code: 401 })
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
