<template>
  <div class="contentBlock clearfix">
    <el-row>
      <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
        <!-- FULLNAME -->
        <h3 class="text-gray-700 text-m font-bold text-left text-primary" style="height: 35px">
          {{ [person.f_name, person.s_name, person.m_name].join(' ') }}
        </h3>
        <template v-if="positions && positions.length">
          <span v-for="(item, index) in positions" :key="index" class="text-gray-700 text-m font-bold text-left text-success">
            {{ (locale == 'ru')?item.name_ru:(locale == 'uzln')?item.name_uz_ln:item.name_uz }}
          </span>
        </template>
        <template v-else-if="user.role == 'citizen'">
          <p class="text-center bg_warning text-m font-bold text-white m-4" style="border-radius: 10px;"> Маълумотлар етарли эмас!
            <router-link :to="{ name: 'CitizenResumeCreate' }">
              <span class="float-right mr-3 text-white" size="small"> <i class="el-icon-edit" /> {{ $t('Редактировать') }}</span>
            </router-link>
          </p>
        </template>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <div v-if="user.role == 'citizen'">
          <router-link :to="{ name: 'CitizenResumeCreate' }">
            <el-button type="primary" class="float-right ml-3" size="small" icon="el-icon-edit">{{ $t('Редактировать') }}</el-button>
          </router-link>
        </div>
        <a :href="resume_url" class="float-right" tag="button" target="_blank">
          <el-button type="primary" plain size="small" icon="el-icon-printer" />
        </a>
      </el-col>
    </el-row>
    <el-col :span="24">
      <el-row class="mt-1">
        <!-- PHOTO -->
        <el-col :xs="12" :sm="4" :md="4" :lg="4" :xl="4">
          <img :src="person_photo" class="image" style="width: 100%; min-height: 160px">
        </el-col>
        <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
          <!-- PASSSPORT -->
          <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14" class="mb-3 ml-4">
            <el-row class="mt-3">
              <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b class="text-muted">{{ $t('Паспорт') }}:</b></el-col>
              <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b>{{ person.passport }}</b></el-col>
            </el-row>
            <el-row class="mt-3">
              <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b class="text-muted">{{ $t('ПИНФЛ') }}:</b></el-col>
              <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b>{{ person.pin }}</b></el-col>
            </el-row>
            <el-row class="mt-3">
              <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b class="text-muted">{{ $t('Пол') }}:</b></el-col>
              <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
                <span v-if="person.gender== 2"><b>{{ $t('Женщина') }}</b></span>
                <span v-if="person.gender== 1"><b>{{ $t('Мужчина') }}</b></span>
              </el-col>
            </el-row>
            <el-row class="mt-3">
              <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
                <b class="text-muted">{{ $t('Год рождение') }}:</b></el-col>
              <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b>{{ person.birth_date?person.birth_date.split('-').reverse().join('.'):' - ' }}</b></el-col>
            </el-row>
            <el-row class="mt-3">
              <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b class="text-muted">{{ $t('Национальность') }}:</b></el-col>
              <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b>{{ person.natn }}</b></el-col>
            </el-row>
          </el-col>
          <!-- CONTACT -->
          <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="mb-3 ml-4">
            <el-row class="mt-3">
              <i class="el-icon-location" />
              <b class="ml-2">{{ person.address }}</b>
            </el-row>
            <el-row class="mt-3">
              <i class="el-icon-message" />
              <a :href="'mailto:'+person.email">
                <b class="ml-2">
                  {{ person.email }}
                </b>
              </a>
            </el-row>
            <el-row class="mt-3">
              <i class="icon-phone" />
              <b class="ml-2"> 
                <a :href="'tel:' + person.phone_number">
                  {{ person.phone_number }}
                </a>
              </b>
            </el-row>
            <el-row v-if="person.home_phone_number" class="mt-3">
              <i class="icon-phone" />
              <b class="ml-2"> 
                <a :href="'tel:' + person.home_phone_number">
                  {{ person.home_phone_number }}
                </a>
              </b>
            </el-row>
          </el-col>
        </el-col>
      </el-row>
    </el-col>
    <el-row>
      <el-col :span="17" :xs="24" :sm="24" :md="17" :lg="17" :xl="17">
        <div style="width: 96%">
          <el-divider content-position="left"><i class="el-icon-s-cooperation" /> {{ $t('ТРУДОВАЯ ДЕЯТЕЛЬНОСТЬ') }} </el-divider>
          <WorkbookTable :workbook="workbook" />
          <!--  -->
          <el-divider content-position="left"><img alt="logo" src="@/assets/images/cap.svg" height="25px" class="ml-2 mt-1">
            {{ $t('Образование') }}</el-divider>
          <EducationTable :education="education" />
        </div>
      </el-col>
      <el-col :span="7" :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
        <el-divider content-position="left">Олий </el-divider>
        <el-row class="mt-4">
          <img alt="logo" src="@/assets/images/conference.svg" height="22px" class="mr-2 mt-1">
          <b>{{ $t('Партийность') }}: </b>
          <span v-if="party == 1">{{ $t('Да') }}</span><span v-if="military_rank == 0">{{ $t('Нет') }}</span>
        </el-row>
        <el-row class="mt-4">
          <img alt="logo" src="@/assets/images/family-silhouette.svg" height="22px" class="mr-2 mt-1">
          <b>{{ $t('Семейное положение') }}: </b>
          {{ person.family_state_id !== 0 ?
            (locale == 'ru' && person.family_state ? person.family_state.name_ru : (locale == 'uzcl' ? person.family_state.name_cyrl : person.family_state.name_uz)) :
            $t('Нет информации')
          }}
        </el-row>
        <el-row class="mt-4">
          <img alt="logo" src="@/assets/images/driver-license.svg" height="22px" class="mr-2 mt-1">
          <b>{{ $t('Водительское права') }}: </b>{{ getDriverLicence() }}
        </el-row>
        <el-row class="mt-4">
          <img alt="logo" src="@/assets/images/military.svg" height="22px" class="mr-2 mt-1">
          <b>{{ $t('Войенное звание') }}: </b><span v-if="military_rank == 1">{{ $t('Да') }}</span><span v-if="military_rank == 0">{{ $t('Нет') }}</span>
        </el-row>
        <!--  -->
        <el-divider content-position="left"><i class="el-icon-s-cooperation" /> {{ $t('Опыт работы') }}</el-divider>
        <el-row class="mt-4">
          <img alt="logo" src="@/assets/images/career-promotion.svg" height="22px" class="mr-2 mt-1">
          <b>{{ $t('Дольжность') }}: </b>
          <template v-if="positions && positions.length">
            <span v-for="(item, index) in positions" :key="index" style="margin-left: 5px">
              {{ (locale == 'ru')?item.name_ru:(locale == 'uzln')?item.name_uz_ln:item.name_uz }}
            </span>
          </template>
          <template v-else>
            -
          </template>
        </el-row>
        <el-row class="mt-4">
          <i class="icon-money mr-2 mt-1" />
          <b>{{ $t('Зарплата') }}: </b>{{ person.want_salary?person.want_salary: ' -' }}
        </el-row>
        <el-row class="mt-4">
          <img alt="logo" src="@/assets/images/info.svg" height="22px" class="mr-2 mt-1">
          <b>{{ $t('О себе') }}: </b>{{ person.about?person.about: ' -' }}
        </el-row>
        <el-row class="mt-4">
          <img alt="logo" src="@/assets/images/target.svg" height="22px" class="mr-2 mt-1">
          <b>{{ $t('Личное качество') }}: </b>{{ person.personal_quality?person.personal_quality:' -' }}
        </el-row>
        <el-row class="mt-4">
          <img alt="logo" src="@/assets/images/desktop.svg" height="22px" class="mr-2 mt-1">
          <b>{{ $t('Компютерные навыки') }}: </b>{{ person.computer_skill?person.computer_skill:' -' }}
        </el-row>
        <el-row class="mt-4">
          <img alt="logo" src="@/assets/images/teamwork.svg" height="22px" class="mr-2 mt-1">
          <b>{{ $t('Хобби') }}: </b>{{ person.hobby?person.hobby:'-' }}
        </el-row>
        <hr>
        <el-row class="mt-4">
          <img alt="logo" src="@/assets/images/teamwork.svg" height="22px" class="mr-2 mt-1">
          <b>{{ $t('График работы') }}: </b> <br>
          <span v-html="work_schedules && work_schedules.length ? workScheduleArr(work_schedules):'-'" />
        </el-row>
        <el-row class="mt-4">
          <img alt="logo" src="@/assets/images/teamwork.svg" height="22px" class="mr-2 mt-1">
          <b>{{ $t('Занятость') }}: </b> <br>
          <span v-html="employments && employments.length ? employmentArr(employments):'-'" />
        </el-row>
        <el-divider content-position="left"><img alt="logo" src="@/assets/images/translate.svg" height="22px" class=" mt-1"> {{ $t('Знание языков') }}</el-divider>
        <el-row>
          <template v-if="languages && languages.length">
            <div v-for="(item, index) in languages" :key="index" class="block">
              <el-row>
                <el-col :span="10">
                  <p class="text-success font-weight-bold">{{ (locale == 'ru')?item.language.name_ru:(locale == 'uzln')?item.language.name_uz_ln:item.language.name_uz_cl }}</p>
                </el-col>
                <el-col :span="14">
                  <el-rate v-model="item.level/2" :colors="colors" disabled />
                </el-col>
              </el-row>
            </div>
          </template>
          <template v-else>
            <p class="text-center"> {{ $t('Данные отсутствует') }}</p>
          </template>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import EducationTable from './resume/education'
import WorkbookTable from './resume/workbook'
export default {
  name: 'Show',
  components: {
    EducationTable, WorkbookTable
  },
  data() {
    return {
      colors: ['#99A9BF', '#007bff', '#007bff'],
      person: {},
      person_photo: '',
      education: [],
      workbook: [],
      currentWorkplace: {},
      activeAccordions: ['1', '3'],
      party: '',
      military_rank: '',
      resume_url: '',
      positions: [],
      languages: [],
      work_schedules: [],
      employments: []
    }
  },
  computed: {
    ...mapGetters({
      resume: 'resume/RESUME',
      locale: 'app/LOCALE',
      user: 'auth/USER'
    })
  },
  mounted() {
    this.show(this.user.resume ? this.user.resume.id : this.$route.params.id).then(
      res => {
        this.person = res.data.resume
        this.resume_url = res.data.resume_url
        this.education = res.data.education.result.citizens ? res.data.education.result.citizens : []
        this.workbook = res.data.workbook.data ? res.data.workbook.data : []
        this.currentWorkplace = res.data.workbook.data ? res.data.workbook.data[0] : []
        this.person_photo = res.data.resume.photo ? process.env.VUE_APP_BASE_URL + res.data.resume.photo : res.data.person_photo.result ? res.data.person_photo.result : ''
        this.party = res.data.partiya.result.party ? 1 : 0
        this.military_rank = res.data.resume.military_rank ? 1 : 0
        this.positions = res.data.position ? res.data.position : []
        this.work_schedules = res.data.work_schedules
        this.employments = res.data.employments
        this.getUserLanguages({ person_pin: res.data.resume.pin }).then(res => {
          this.languages = res.data.data
        })
      }
    )
  },
  methods: {
    ...mapActions({
      show: 'resume/show',
      getInfo: 'auth/getInfo',
      getUserLanguages: 'resume/userLanguages'
    }),
    getDriverLicence() {
      let str = ''
      if (this.person.drive_license && this.person.drive_license.length) {
        for (var element in this.person.drive_license) {
          str += this.person.drive_license[element] + ' '
        }
      } else {
        str = this.$t('Нет')    
      }
      return str
    },
    workScheduleArr(schedules) {
      let scheduless = ''
      schedules.forEach(schedul => {
        if (this.locale === 'ru') {
          scheduless += schedul.name_ru + '<br>'
        } else if (this.locale === 'uzln') {
          scheduless += schedul.name_uz + '<br>'
        } else {
          scheduless += schedul.name_cyrl + '<br>'
        }
      })
      return scheduless
    },
    employmentArr(emps) {
      let employment = ''
      emps.forEach(emp => {
        if (this.locale === 'ru') {
          employment += emp.name_ru + '<br>'
        } else if (this.locale === 'uzln') {
          employment += emp.name_uz + '<br>'
        } else {
          employment += emp.name_cyrl + '<br>'
        }
      })
      return employment
    },
    dateFromLineToDot(date) {
      return date ? date.split('-').reverse().join('.') : ''
    },
    getLanguages() {
      
    }
  }
}
</script>
