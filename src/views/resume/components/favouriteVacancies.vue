<template>
  <VacanciesList :show-favourites="true" :appeals="false" />
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
    this.setFilter({ showFavourites: true }).then(res => {})
  },
  methods: {
    ...mapActions({
      setFilter: 'app/getFilter'
    })
  }
}
</script>
