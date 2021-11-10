<template>
  <div class="content list">
    <div class="list__header">
      <div class="container">
        <div class="search-form">
          <div class="row">
            <div class="col-lg-10 col-md-10 col-sm-9 col-xs-10 no-padding-right-mobile">
              <div class="form-group position-relative">
                <input
                  v-model="filter.search"
                  type="text"
                  class="form-control"
                  placeholder="Vakansiya izlash uchun kasb, hudud, lavozim yoki tashkilot nomini kiriting"
                >
                <button class="btn btn-default btn-filter-setting">
                  <img src="/img/image/filter.svg">
                </button>
              </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-3 col-xs-2 no-padding-left-mobile">
              <button class="btn btn-primary btn-block btn-find" @click="getVacancies">
                <img src="/img/image/search.svg">
                <span class="text">Qidirish</span>
              </button>
            </div>
          </div>
        </div>
        <br>
        <!-- <ul class="nav nav-pills">
          <li class="nav-item">
            <a href="" class="nav-link active"> Vakansiyalar </a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link"> Rezyumelar </a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link"> Tashkilotlar </a>
          </li>
        </ul> -->
      </div>
    </div>
    <div class="list__content">
      <div class="container">
        <div class="list__info">
          <div class="__header">
            <div class="list__title">
              Topilgan vakansiyalar soni <b>{{ $filters.formatPrice(vacancies.total) }}</b> ta
            </div>
            <div class="btn-group btn-group-slider">
              <button class="btn btn-default">Vaqtincha ish</button>
              <button class="btn btn-default">Mavsumiy ish</button>
              <button class="btn btn-default">Doimiy ish</button>
              <button class="btn btn-default">Masofadan turib ishlash</button>
              <button class="btn btn-default">Smenali ish</button>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="filter__header">
              <div class="row">
                <div class="col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <select id="" name="" class="form-control">
                    <option value="">Barcha e’lonlar</option>
                  </select>
                </div>
                <div class="col-lg-10 col-md-10 col-sm-9 col-xs-8 text-right">
                  <div class="total">
                    Namoyish etilyapdi <b>{{ vacancies.per_page }}</b> ta <b>{{ $filters.formatPrice(vacancies.total) }}</b> tadan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3">
            <filter-vacancy :filter="filter" />
          </div>
          <div class="col-lg-9">
            <div v-loading="loading" class="list__vacancies">
              <div
                v-for="(vacancy, index) in vacancies.data"
                :key="index"
                class="list__vacancies__item"
              >
                <div class="item-body" @click="showVacancy(vacancy.id)">
                  <div class="item-row">
                    <div class="name">{{ vacancy.position_name }}</div>
                    <div v-if="vacancy.position_salary" class="salary">
                      {{ $filters.formatPrice(vacancy.position_salary) }} <b> so’mdan</b>
                    </div>
                    <div v-else>
                      <span>Maosh ko'rsatilmagan</span>
                    </div>
                  </div>
                  <div class="organization">{{ vacancy.company_name }}</div>
                  <div class="address">
                    {{ vacancy.region ? vacancy.region.name_uz_ln : "" }}
                    {{ vacancy.city ? ", " + vacancy.city.name_uz_ln : "" }}
                  </div>
                  <div class="organization__logo" :style="`background-image: url('${defaultLogo}')`" />
                  <div class="desc">
                    {{ vacancy.position_name }}
                  </div>
                </div>
                <div class="item-footer">
                  <div class="btn btn-primary">Qiziqish bildirish</div>
                  <div class="icon-question">
                    <img src="/img/image/question.svg" alt="">
                  </div>
                  <div class="date_view">
                    <div class="date">
                      {{ toLocaleDateString(vacancy.date_start) }}
                    </div>
                    <div class="view-count">2,5К</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center">
              <button class="filter_mobile_btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                  viewBox="0 0 32 28"
                >
                  <path
                    id="Fabric_Icons"
                    data-name="Fabric Icons"
                    d="M16-30v3.422l-12,12V-2H-4V-14.578l-12-12V-30Zm-2,2H-14v.578l12,12V-4H2V-15.422l12-12Z"
                    transform="translate(16 30)"
                    fill="#f8f8f8"
                  />
                </svg>

                <span> Filtrlar </span>
              </button>
            </div>
            <div class="text-center">
              <el-pagination v-model:currentPage="filter.page" :total="vacancies.total" layout="prev, pager, next" :page-size="vacancies.per_page" @current-change="handleCurrentChange" />
              <br><br>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import url from '../../utils/default-logo'
import FilterVacancy from './filter'
export default {
  name: 'Index',
  components: { FilterVacancy },
  data() {
    return {
      loading: false,
      defaultLogo: url,
      filter: {
        per_page: 5,
        page: 1,
        salary: null,
        search: null
      }
    }
  },
  computed: {
    ...mapGetters({ vacancies: 'vacancy/GET_VACANCIES' })
  },
  watch: {
    'filter.salary'(newVal) {
      if (newVal !== 'manual') {
        this.getVacancies()
      }
    }
  },
  mounted() {
    this.fetchVacancies(this.filter)
  },
  methods: {
    ...mapActions({ fetchVacancies: 'vacancy/index' }),
    showVacancy(id) {
      this.$router.push({ name: 'VacancyShow', params: { id: id }})
    },
    handleCurrentChange(page) {
      this.filter.page = page
      this.getVacancies()
    },
    async getVacancies() {
      this.loading = true
      await this.fetchVacancies(this.filter)
      this.loading = false
    }
  }
}
</script>

<style scoped>
</style>
