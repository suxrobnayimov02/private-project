<template>
  <div class="content list">
    <div class="list__header">
      <div class="container">
        <div class="search-form">
          <form action="">
            <div class="row">
              <div class="col-lg-10 col-md-10 col-sm-9 col-xs-10 no-padding-right-mobile">
                <div class="form-group position-relative">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Vakansiya izlash uchun kasb, hudud, lavozim yoki tashkilot nomini kiriting "
                  >
                  <button class="btn btn-default btn-filter-setting">
                    <img src="/img/image/filter.svg">
                  </button>
                </div>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-3 col-xs-2 no-padding-left-mobile">
                <button class="btn btn-primary btn-block btn-find">
                  <img src="/img/image/search.svg">                  
                  <span class="text">Qidirish</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a href="" class="nav-link active"> Vakansiyalar </a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link"> Rezyumelar </a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link"> Tashkilotlar </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="list__content">
      <div class="container">
        <div class="list__info">
          <div class="__header">
            <div class="list__title">
              Topilgan vakansiyalar soni <b>53 897</b> ta
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
                    Namoyish etilyapdi <b>20</b> ta <b>53 897</b> tadan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3">
            <filter-vacancy />
          </div>
          <div class="col-lg-9">
            <div class="list__vacancies">
              <div
                v-for="(vacancy, index) in vacancies.data"
                :key="index"
                class="list__vacancies__item"
              >
                <div class="item-body" @click="showVacancy(vacancy.id)">
                  <div class="item-row">
                    <div class="name">{{ vacancy.position_name }}</div>
                    <div v-if="vacancy.position_salary" class="salary">
                      {{ vacancy.position_salary }} <b> so’mdan</b>
                    </div>
                  </div>
                  <div class="organization">{{ vacancy.company_name }}</div>
                  <div class="address">
                    {{ vacancy.region ? vacancy.region.name_uz_ln : "" }}
                    {{ vacancy.city ? ", " + vacancy.city.name_uz_ln : "" }}
                  </div>
                  <div
                    class="organization__logo"
                    style="background-image: url('/img/image/portal.svg')"
                  />
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
                      {{ vacancy.date_start }}
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
            <nav class="pagination-row">
              <ul class="pagination">
                <li class="disabled">
                  <span class="icon" aria-hidden="true">
                    <img src="/img/image/arrow-left.svg">                   
                  </span>
                </li>
                <li><a href="#">1</a></li>
                <li class="active"><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li class="dots">
                  <span> ... </span>
                </li>
                <li><a href="#">98</a></li>
                <li>
                  <a aria-label="Next">
                    <span aria-hidden="true">
                      <img src="/img/image/arrow-right.svg">
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
            <el-pagination
              :page-size="20"
              :pager-count="11"
              layout="prev, pager, next"
              :total="1000"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import FilterVacancy from './filter'
export default {
  name: 'Index',
  components: { FilterVacancy },
  data() {
    return {
      filter: {

      }
    }
  },
  computed: {
    ...mapGetters({ vacancies: 'vacancy/GET_VACANCIES' })
  },
  async mounted() {
    if (!(this.vacancies && this.vacancies.length)) {
      await this.fetchVacancies().then(res => {
        console.log('res', res)
      })  
    }
  },

  methods: {
    ...mapActions({ fetchVacancies: 'vacancy/index' }),
    showVacancy(id) {
      this.$router.push({ name: 'VacancyShow', params: { id: id }})
    }
  }
}
</script>

<style scoped>
</style>
