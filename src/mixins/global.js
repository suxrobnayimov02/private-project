import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ user: 'auth/USER' }),
    currentYear() {
      return new Date().getFullYear()
    }
  },
  methods: {
    hasPermission(value) {
      const perms = this.user.permissions
      let available = false
      if (perms) {
        if (value && value instanceof Array) {
          value.forEach(element => {
            available = available || (perms.includes(element))
          })
        } else {
          available = perms.includes(value)
        }
      }
      return available
    },
    getPercentInt(actual, plan) {
      if (actual > 0 && plan) {
        const a = ((actual / plan) * 100).toFixed(1)
        return parseFloat(a)
      } else {
        return 0
      }
    },
    toLocaleDateString(date) {
      const date1 = new Date(date)
      return date1.toLocaleDateString()
    },
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace(' ', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    },
    currentDate() {
      return new Date().toLocaleDateString()
    }
  }
}
