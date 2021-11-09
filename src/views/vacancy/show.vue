<template>
  <div class="content v-page">
    <div class="container">
      <div class="row row-no-gutters">
        <div class="col-lg-8 row-right-divider">
          <div class="v-info">
            <div class="v-card position-relative">
              <div class="name">{{ vacancy.position_name }}</div>
              <div v-if="vacancy.position_salary" class="salary">
                Oyiga <b> {{ $filters.formatPrice(vacancy.position_salary) }}</b> so’mdan
              </div>
              <div v-else style="margin-bottom: 16px">Maosh ko'rsatilmagan</div>
              <div class="organization">{{ vacancy.company_name }}</div>
              <div class="address">{{ vacancy.region ? vacancy.region.name_uz_ln : '-' }}, {{ vacancy.district ? vacancy.district.name_uz_ln : '-' }}</div>
              <div
                class="organization__logo"
                :style="`background-image: url('${defaultLogo}');`"
              />
              <div class="watcher">
                Ayni damda, ushbu vakansiyani <span><b>18</b> ta odam </span>
                ko’rayapdi
              </div>
              <div class="actions">
                <div class="btn btn-primary">
                  Qiziqish bildirish
                </div>
                <div class="btn btn-outline-primary">
                  Aloqa qilish
                </div>
                <div class="btn btn-favorite">
                  <img src="/img/image/question.svg" alt="svg">
                </div>
              </div>
              <div class="request">
                <span>Talab etilayotgan ish tajribasi:</span>
                <div class="btn-group btn-group-slider">
                  <button class="btn  btn-rounded">1-3 yil</button>
                  <button class="btn  btn-rounded">Tajriba talab etilmaydi</button>
                </div>
              </div>
              <div class="request">
                <span>Ish turi:</span>
                <div class="btn-group btn-group-slider">
                  <button class="btn  btn-rounded">Doimiy ish</button>
                  <button class="btn  btn-rounded">Vaqt bilan chegaralanmagan</button>
                </div>
              </div>

            </div>
            <div class="v-desc">
              <div class="__item">
                <div class="title">Korxona haqida</div>
                <div class="content">
                  ASKO-VOSTOK sug’urta tashkiloti butun Respublika bo’yicha sug’urta agentlarini ishga taklif qiladi.
                  Ish tajribasi ahamiyatsiz, eng asosiysi ishga ma’suliyat bilan yondashish. Mijozlar bilan aloqa o’rnatish, tushuntirish ishlarini oborish…
                </div>
              </div>
              <div class="__item">
                <div class="title">Majburiyatlar</div>
                <div class="content">
                  <ul>
                    <li>{{ vacancy.position_duties }}</li>
                  </ul>
                </div>
              </div>
              <div class="__item">
                <div class="title">Talablar</div>
                <div class="content">
                  <ul>
                    <li>{{ vacancy.position_requirements }}</li>
                  </ul>
                </div>
              </div>
              <div class="__item">
                <div class="title">Ish sharoitlari</div>
                <div class="content">
                  <ul>
                    <li>{{ vacancy.position_conditions }}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="v-apply">
              <div class="item-footer">
                <div class="btn btn-outline-primary">
                  Aloqa ma’lumotlarini olish
                </div>
                <div class="date_view">
                  <div class="date">
                    {{ toLocaleDateString(vacancy.date_start) }}
                  </div>
                  <div class="view-count">
                    2,5К
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="simple-card card"
            style="background-image: url('/img/image/for_applicant-rotate.png');"
          >
            <div class="card-body">
              <div class="title">
                Ish beruvchi Siz bilan bog’lana olishi
                uchun, Pasport ID yoki Mobil telefon
                raqamingizni kiriting
              </div>
              <div class="form-group">
                <!-- class is-valid покарсить иконку -->
                <input
                  type="text"
                  class="form-control "
                  placeholder="Pasport ID yoki Mobil telefon "
                >
              </div>
              <div class="form-group">
                <button class="btn btn-primary">Davom etish</button>

              </div>
              <div class="form-group">
                <a href="" class="btn btn-link">Kirish</a>
                <a href="" class="btn btn-link">Ro’yhatdan o’tish</a>
              </div>
            </div>
            <div class="card-footer">
              «Davom etish» tugmasini bosib, Siz <a href="">«Ish topishga ko’maklashish bo’yicha
                kelishuv(Oferta)»</a> bilan tanishib chiqganingizni va kelishuvda ko’rsatilgan
              talablarga
              roziligingizni tasdiqlaysiz
            </div>
          </div>
        </div>
        <div class="col-lg-4" style="margin-top: 20px!important;">
          <div class="flex-order">
            <div class="similar_v ">
              <div class="title">O’xshash vakansiyalar</div>
              <div class="row">
                <div v-for="(item, i) in list.data" :key="i" class="col-lg-12 col-md-6 col-sm-6">
                  <router-link :to="{ name: 'VacancyShow', params: { id: item.id } }" class="card vacancy__info">
                    <div class="name">{{ item.position_name }}</div>
                    <div v-if="item.position_salary" class="salary"><b>{{ $filters.formatPrice(item.position_salary) }}</b> so’mdan</div>
                    <div v-else class="salary">Maosh ko'rsatilmagan</div>
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
                <a href="" class="more_link"> <b>{{ $filters.formatPrice(list.total) }}</b> ta O’xshash vakansiyalar</a>
              </div>
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
export default {
  name: 'Show',
  data() {
    return {
      defaultLogo: url
    }
  },
  computed: {
    ...mapGetters({ vacancy: 'vacancy/GET_VACANCY', list: 'vacancy/GET_VACANCIES' })
  },
  created() {
    this.show(this.$route.params.id).then(res => {
      this.index({ position_kodp_pn: this.vacancy.position_kodp_pn, position_kodp_type: this.vacancy.position_kodp_type, per_page: 7 })
    })
  },
  methods: {
    ...mapActions({ show: 'vacancy/show', index: 'vacancy/index' }),
    fixCompanyName(name) {
      return name.length > 35 ? name.slice(0, 35) + '...' : name
    }
  }
}
</script>

<style scoped>

</style>
