<template>
  <div class="container bigger no-padding">
    <div class="vacancies__latest no-padding-right">
      <div class="section__title">Yangi vakansiyalar</div>
      <div class="type-slider">
        <carousel v-if="listFilterableNskz.length" :items-to-show="5">
          <slide v-for="i in listFilterableNskz" :key="i.id">
            <span class="type_item pointer" :class="{ 'active' : filter.nskz === i.code }" @click="filter.nskz = i.code">
              <span>{{ i.name_uz_ln }}</span>
            </span>
          </slide>
          <template #addons>
            <navigation />
            <!--            <pagination />-->
          </template>
        </carousel>
      </div>
      <div v-loading="loading" class="vacancy__list">
        <div class="row row-no-gutters">
          <div v-for="(item, i) in list.data" :key="i" class="col-lg-4 col-md-6">
            <router-link :to="{ name: 'VacancyShow', params: { id: item.id } }" class="card vacancy__info">
              <div class="name">{{ item.position_name }}</div>
              <div v-if="item.position_salary" class="salary"><b>{{ $filters.formatPrice(item.position_salary) }}</b> so’mdan</div>
              <div v-else class="salary"><div class="not-show">Maosh ko'rsatilmagan</div></div>
              <div class="organization checked">{{ fixCompanyName(item.company_name) }}</div>
              <div class="address">{{ item.region ? item.region.name_uz_ln : '-' }}, {{ item.district ? item.district.name_uz_ln : '-' }}</div>
              <div class="date_view">
                <div class="date">{{ toLocaleDateString(item.date_start) }}</div>
                <div class="view-count">2,5К</div>
              </div>
              <div class="organization__logo" :style="`background-image: url('${defaultLogo}')`" />
            </router-link>
          </div>
        </div>
        <div class="text-center">
          <router-link :to="{ name: 'VacancyIndex' }" class="more_link">
            Barcha vakansiyalar
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import url from '../../../utils/default-logo'
import { mapActions, mapGetters } from 'vuex'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
  name: 'VacancyList',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  data() {
    return {
      defaultLogo: url,
      filter: {
        nskz: null,
        per_page: 9
      },
      loading: true
    }
  },
  computed: {
    ...mapGetters({ list: 'vacancy/GET_VACANCIES', listFilterableNskz: 'resources/GET_FILTERABLE_NSKZ' })
  },
  watch: {
    'filter.nskz'(newVal) {
      this.getList()
    }
  },
  mounted() {
    this.getList()
    this.filterableNskz()
  },
  methods: {
    ...mapActions({ index: 'vacancy/index', filterableNskz: 'resources/filterableNskz' }),
    fixCompanyName(name) {
      return name.length > 35 ? name.slice(0, 35) + '...' : name
    },
    async getList() {
      this.loading = true
      await this.index(this.filter)
      this.loading = false
    }
  }

}
</script>

<style scoped>
  .salary .not-show {
    color: #6c757d!important;
    padding-top: 8px;
  }
</style>
