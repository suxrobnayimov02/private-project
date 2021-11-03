<template>
  <VacanciesList :appeals="true" :show-favourites="false" :is-appeals-page="true" />
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import VacanciesList from '@/views/vacancies/list'

export default {
  name: 'FavouriteVacanciesList',
  components: {
    VacanciesList
  },
  computed: {
    ...mapGetters({})
  },
  mounted() {
    // this.setFilter({ appeals: true }).then(res => {})
  },
  methods: {
    ...mapActions({
      setFilter: 'app/getFilter'
    })
  }
}
</script>
