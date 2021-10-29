import { mapGetters } from 'vuex'

export default {
  computed: {
    authServiceOneIDLink () {
      return process.env.VUE_APP_ONE_ID_AUTH_URL
    },
    authServiceEsiLink () {
      return process.env.VUE_APP_ESI_AUTH_URL
    },
    ...mapGetters({ user: 'auth/USER' })
  },
  methods: {
    loginAuthService (type) {
      window.location = String(type).replace('[base_url]', encodeURIComponent(process.env.VUE_APP_BASE_API))
    }
  }
}
