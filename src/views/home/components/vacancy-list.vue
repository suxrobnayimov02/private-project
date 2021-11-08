<template>
  <div class="container bigger no-padding">
    <div class="vacancies__latest no-padding-right">
      <div class="section__title">Yangi vakansiyalar</div>
      <div class="type-slider">
        <div class="type-carousel owl-carousel owl-theme">
          <a href="" class="type_item active">
            <span>Taklif qilinganlar</span>
          </a>
          <a href="" class="type_item">
            <span>Talabalar uchun</span>
          </a>
          <a href="" class="type_item">
            <span>Quruvchilar uchun</span>
          </a>
          <a href="" class="type_item">
            <span>Haydovchilar uchun</span>
          </a>
          <a href="" class="type_item">
            <span>Reklama va marketing</span>
          </a>
          <a href="" class="type_item">
            <span>IT sohasi</span>
          </a>
          <a href="" class="type_item">
            <span>O’qituvchi</span>
          </a>
          <a href="" class="type_item">
            <span>O’qituvchi</span>
          </a>
          <a href="" class="type_item">
            <span>O’qituvchi</span>
          </a>
        </div>
      </div>
      <div class="vacancy__list">
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

export default {
  name: 'VacancyList',
  data() {
    return {
      defaultLogo: url
    }
  },
  computed: {
    ...mapGetters({ list: 'vacancy/GET_VACANCIES' })
  },
  mounted() {
    this.index({ per_page: 9 })
  },
  methods: {
    ...mapActions({ index: 'vacancy/index' }),
    fixCompanyName(name) {
      return name.length > 35 ? name.slice(0, 35) + '...' : name
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
