<template>
  <div v-if="is_auth" class="contentBlock clearfix container">
    <div class="grid-content bg-purple-dark">
      <h2 style="text-align: center; font-weight: bold">{{ $t('Резуме') }}</h2>
    </div>
    <!-- <h3 class="text-gray-700 text-m font-bold bg-gray-200 text-center">
      {{ [form.f_name, form.s_name, form.m_name].join(' ') }}
    </h3> -->
    <h3 class="text-gray-700 text-m font-bold text-left text-primary text-center" style="height: 35px">
      {{ [form.f_name, form.s_name, form.m_name].join(' ') }}
    </h3>
    <el-row :gutter="40">
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
        <div class="grid-content bg-purple" justify="end" style="text-align: center">
          <template v-if="photoUrl">
            <img :src="photoUrl" alt="image" width="150px" style="min-height: 160px">
          </template>
          <template v-else>
            <img
              src="@/assets/images/businessman.svg"
              alt="image"
              width="150px"
            ><br>
          </template>
          <div class="mt-2 clearfix">
            <el-upload
              class="upload-demo"
              action="/"
              :on-change="handleChange"
              :limit="1"
              :auto-upload="false"
              :on-exceed="handleExceed"
              :file-list="fileList"
              :style="photoUrl?{'float': 'right'}:''"
            >
              <el-button
                size="small"
                type="primary"
                style="font-size: 9px"
              ><i class="el-icon-upload" />{{ $t('Изменит фото') }}</el-button>
            </el-upload>
            <el-button
              v-if="photoUrl"
              size="small"
              style="font-size: 9px"
              type="danger"
              @click="destroy()"
            ><i class="el-icon-delete" />
            </el-button>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18" class="mb-3">
        <el-row class="mt-3">
          <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b class="text-muted">{{ $t('Возраст') }}:</b></el-col>
          <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b>{{ calcAge(form.birth_date) }}</b></el-col>
        </el-row>
        <el-row class="mt-3">
          <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b class="text-muted">{{ $t('Пол') }}:</b></el-col>
          <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
            <span v-if="form.gender== 2"><b>{{ $t('Женщина') }}</b></span>
            <span v-if="form.gender== 1"><b>{{ $t('Мужчина') }}</b></span>
          </el-col>
        </el-row>
        <el-row class="mt-3">
          <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="8"><b class="text-muted">{{ $t('Партийность') }}:</b></el-col>
          <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b>{{ party }}</b></el-col>
        </el-row>
      </el-col>
    </el-row>
    <br>
    <el-divider content-position="left">
      <img alt="logo" src="@/assets/images/career-promotion.svg" height="22px" class="mr-2 mt-1">
      {{ $t('Дополнительная информация') }}
    </el-divider>
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      label-width="120px"
      class="top-label-custom"
      label-position="top"
    >
      <el-row>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
          <div class="formControl">
            <el-form-item :label="$t('Регион') + ':'">
              <div class="field withBackground">
                <select v-model="regionModel" @change="changeRegion()">
                  <option value="">{{ $t('Выберите') }}</option>
                  <option v-for="(region, index) of regions" :key="index" :value="region.soato">
                    {{ locale == 'uzcl' ? region.name_cyrl : locale == 'uzln' ? region.name_uz : region.name_ru }}
                  </option>
                </select>
              </div>
            </el-form-item>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
          <div class="formControl">
            <el-form-item :label="$t('Районы') + ':'">
              <div class="field withBackground">
                <select v-model="districtModel" @change="changeDistrict()">
                  <option value="">{{ $t('Выберите') }}</option>
                  <template v-if="districts && districts.length">
                    <option v-for="(district, index) of districts" :key="index" :value="district.code">
                      {{ translateDistrict(district) }}
                    </option>
                  </template>
                </select>
              </div>
            </el-form-item>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
          <el-form-item :label="$t('Адрес')">
            <el-input v-model="form.address" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
          <el-form-item :label="$t('Мобилный телефон')">
            <el-input v-model="form.phone_number" v-mask="mask" />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
          <el-form-item :label="$t('Домашный телефон')">
            <el-input v-model="form.home_phone_number" v-mask="mask" />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
          <el-form-item :label="$t('Электронная почта')">
            <el-input v-model="form.email" />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
          <el-form-item :label="$t('Войенное звание') + ':'">
            <el-select v-model="form.military_rank" placeholder="___">
              <el-option :label="$t('Да')" value="1" />
              <el-option :label="$t('Нет')" :value="null" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
          <el-form-item :label="$t('Водительское права') + ':'">
            <el-select v-model="form.drive_license" placeholder="___" multiple>
              <el-option v-for="item in driversLicenses" :key="item.id" :label="item.name" :value="item.id" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <!--  -->
      <el-divider content-position="left">
        <img alt="logo" src="@/assets/images/career-promotion.svg" height="22px" class="mr-2 mt-1">
        {{ $t('Дополнительная информация') }}
      </el-divider>
      <el-row>
        <el-col :span="24">
          <el-form-item :label="$t('Желаемая должность')" prop="positions_id">
            <el-select
              v-model="form.positions_id"
              class="w-100"
              multiple
              filterable
              remote
              reserve-keyword
              :placeholder="$t('Лавозим номини киритинг')"
              :remote-method="onSearch"
              :loading="loading"
            >
              <el-option
                v-for="item in positions"
                :key="item.id"
                :label="(locale == 'ru') ? item.name_ru : (locale == 'uzln') ? item.name_uz_ln:item.name_uz"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
          <el-form-item :label="$t('Зарплата')">
            <input v-model="form.want_salary" v-money="money" class="text-right text-right  el-input__inner">
          </el-form-item>
        </el-col>
      </el-row>
      <!-- График работы -->
      <el-row>
        <el-collapse v-model="activeNames">
          <el-col :xs="24" :sm="24" :lg="12" :xl="12">
            <el-collapse-item :title="$t('График работы')" name="1">
              <template v-if="busynessTypes && busynessTypes.length !== 0">
                <div v-for="(type, index) in busynessTypes" :key="'schedule' +index">
                  <el-checkbox v-model="checked1" :label="type.id">
                    {{ (locale == 'ru')?type.name:(locale == 'uzln')?type.name:type.name }}
                  </el-checkbox>
                </div>
              </template>
              <span v-else class="label label-red mr-2">{{ $t('Нет') }}</span>
            </el-collapse-item>
          </el-col>
          <el-col :xs="24" :sm="24" :lg="12" :xl="12">
            <el-collapse-item :title="$t('Занятость')" name="2">
              <template v-if="workGraphics && workGraphics.length !== 0">
                <div v-for="type in workGraphics" :key="'emp' + type.id">
                  <el-checkbox v-model="checked2" :label="type.id">
                    {{ (locale == 'ru')?type.name:(locale == 'uzln')?type.name:type.name }}
                  </el-checkbox>
                </div>
              </template>
              <span v-else class="label label-red mr-2">{{ $t('Нет') }}</span>
            </el-collapse-item>
          </el-col>
        </el-collapse>
      </el-row>
      <!-- ABOUT ME -->
      <el-row>
        <el-col :xs="24" :sm="24" :lg="12" :xl="12">
          <el-form-item :label="$t('О себе') + ':'">
            <el-input v-model="form.about" type="textarea" />
          </el-form-item>

        </el-col>
        <el-col :xs="24" :sm="24" :lg="12" :xl="12">
          <el-form-item :label="$t('Личное качество') + ':'">
            <el-input v-model="form.personal_quality" type="textarea" />
          </el-form-item>

        </el-col>
        <el-col :xs="24" :sm="24" :lg="12" :xl="12">
          <el-form-item :label="$t('Компютерные навыки') + ':'">
            <el-input v-model="form.computer_skill" type="textarea" />
          </el-form-item>

        </el-col>
        <el-col :xs="24" :sm="24" :lg="12" :xl="12">
          <el-form-item :label="$t('Хобби') + ':'">
            <el-input v-model="form.hobby" type="textarea" />
          </el-form-item>
        </el-col>
      </el-row>
      <!-- LANGUAGES -->
      <el-row v-if="skillCategories && skillCategories.length" class="mt-1">
        <el-col :span="16">
          <languages :profile="userInfo.resume" :locale="locale" />
        </el-col>
      </el-row>
      <hr>
      <!-- Образование/ТРУДОВАЯ ДЕЯТЕЛЬНОСТЬ -->
      <el-row>
        <el-divider content-position="left"><img alt="logo" src="@/assets/images/cap.svg" height="25px" class="ml-2 mt-1">
          {{ $t('Образование') }}</el-divider>
        <el-row>
          <el-col :xs="24" :sm="24" :md="12" :lg="16" :xl="16">
            <el-form-item label=" ">
              <el-button
                class="float-right mb-2"
                type="primary"
                size="small"
                icon="el-icon-plus"
                @click="addEducation"
              >Олий маълумот қўшиш</el-button>
            </el-form-item>
          </el-col>
        </el-row>
        <div>
          <el-row v-if="educationDialog">
            <EducationCreate :form="education" :education-levels="educationLevels" :create-or-update="'create'" :education-dialog="educationDialog" />
          </el-row>
          <el-row v-if="education && education.length">
            <EducationTable :education="education" />
          </el-row>
        </div>
        <br>
        <hr>
        <el-row>
          <el-divider content-position="left"><i class="el-icon-s-cooperation" /> {{ $t('ТРУДОВАЯ ДЕЯТЕЛЬНОСТЬ') }} </el-divider>
        </el-row>
        <el-row>
          <experience-index />
          <experience-create />
        </el-row>
      </el-row>
      <!-- <el-dialog
        v-model="educationDialog"
        title="Tips"
        width="30%"
      >
        <span>This is a message</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="educationDialog = false">Cancel</el-button>
            <el-button
              type="primary"
              @click="educationDialog = false"
            >Confirm</el-button>
          </span>
        </template>
      </el-dialog> -->
      <hr>
      <el-form-item>
        <el-button type="success" class="float-right" @click="onUpdate">{{ $t('Сохранить') }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import EducationTable from './components/resume/education'
import EducationCreate from './Education/create.vue'
import { translater } from '@/assets/translate/translat_service'
import ExperienceIndex from './experience/index'
import ExperienceCreate from './experience/create'
import languages from './components/languages'
import { VMoney } from 'v-money'
import { VueMaskDirective } from 'v-mask'

export default {
  components: {
    EducationTable, ExperienceIndex, ExperienceCreate, languages, EducationCreate
  },
  directives: { money: VMoney, mask: VueMaskDirective },
  data() {
    return {
      // regions: '',
      // districts: '',
      checked1: [],
      checked2: [],
      mask: '##',
      loaded: false,
      form: {
        f_name: null,
        s_name: null,
        m_name: null,
        pin: null,
        birth_date: null,
        gender: null,
        address: null,
        positions_id: null,
        phone_number: null,
        home_phone_number: null,
        email: null,
        family_state_id: null,
        military_rank: null,
        drive_license: null,
        want_salary: null,
        about: null,
        personal_quality: null,
        computer_skill: null,
        hobby: null,
        is_student: 0,
        work_schedule: null,
        employment_id: null,
        education_degree: null,
        education: [],
        region_id: null,
        city_id: null
      },
      // form: {},
      details_for_collage: {
        dialogFormVisible: true,
        degree: 2
      },
      money: {
        decimal: '.',
        thousands: ',',
        suffix: '',
        precision: 0,
        masked: false
      },
      edu_type_disabled: false,
      educationDialog: false,
      loading: false,
      activeAccordions: ['1', '3'],
      person_photo: null,
      regionModel: null,
      districtModel: null,
      education: [],
      edu_degrees: [],
      party: '',
      person: {},
      drive_license: ['A', 'B', 'C', 'D', 'E'],
      positions: [],
      photoUrl: null,
      fileList: [],
      activeNames: ['1', '2'],
      scheduleTypes: [],
      employmentTypes: [],
      rules: {
        positions_id: [
          { required: true, message: this.$t('Заполните это поле'), trigger: 'change' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters({
      locale: 'app/LOCALE',
      userInfo: 'auth/USER',
      is_auth: 'auth/GET_IS_AUTH',
      resume: 'resume/RESUME',
      regions: 'region/GET_REGIONS',
      driversLicenses: 'resources/GET_DRIVERS_LICENSES',
      skillCategories: 'resources/GET_SKILL_CATEGORIES',
      skillLevels: 'resources/GET_SKILL_LEVELS',
      educationLevels: 'resources/GET_EDUCATION_LEVELS',
      businessTrips: 'resources/GET_BUSINESS_TRIPS',
      busynessTypes: 'resources/GET_BUSYNESS_TYPES',
      workGraphics: 'resources/GET_WORK_GRAPHICS',
      districts: 'region/GET_DISTRICTS'
    })

  },
  watch: {
    'form.education_degree'(newVal, oldVal) {
      if (newVal && newVal !== oldVal) {
        if (newVal === 2) {
          if (!this.form.education) {
            this.form.education = []
          }
        } else if (newVal === 3) {
          //
        }
      }
    },
    'form.is_student'(newVal, oldVal) {
      if (newVal && newVal !== oldVal) {
        if (newVal === 1) {
          this.details_for_collage.degree = 3
        } else {
          this.details_for_collage.degree = 2
        }
      }
    }
  },
  async mounted() {
    if (!(this.regions && this.regions.length)) {
      this.fetchRegions()
    }
    this.loaded = false
    await this.fetchResources().then(() => {
      this.loaded = true
    })
    this.getInfo().then(() => {
      console.log('2')
      console.log(this.userInfo)
      console.log(this.userInfo.id)
      console.log(this.is_auth)
    })
    if (this.userInfo && this.userInfo.resume) {
      this.show(this.userInfo.resume.id).then(
        res => {
          // this.form = res.data.resume
          if (res.success && res.data) {
            this.setForm({ form: this.form, details: res.data.resume })
          }
          this.education = res.data.education.result.citizens
          if (this.education && this.education.length) {
            this.edu_type_disabled = true
          }
          this.workbook = res.data.workbook.data ? res.data.workbook.data : []
          this.positions = res.data.position ? res.data.position : []
          this.party = res.data.partiya.result.party ? res.data.partiya.result.party : this.$t('Нет')
          this.regionModel = res.data.resume.region_id
          this.districtModel = res.data.resume.city_id
          if (res.data.resume.photo) {
            this.photoUrl = process.env.VUE_APP_BASE_URL + res.data.resume.photo
          }
          if (!this.form.work_schedule) {
            this.form.work_schedule = []
          }
          if (!this.form.employment_id) {
            this.form.employment_id = []
          }
          if (this.regionModel) {
            this.changeRegion()
          }
          if (this.education.length !== 0) {
            this.form.education_degree = 3
          }
        }
      )
    }
    // this.getAppealsStatuses({ type: 'work_schedule' }).then(res => {
    //   this.scheduleTypes = res.data
    // })
    // if (!this.employmentTypes.length) {
    //   this.getAppealsStatuses({ type: 'employment_id' }).then(res => {
    //     this.employmentTypes = res.data
    //   })
    // }
    // this.getAppealsStatuses({ type: 'edu_degree' }).then(res => {
    //   this.edu_degrees = res.data
    // })
  },
  methods: {
    ...mapActions({
      fetchRegions: 'region/regions',
      fetchResources: 'resources/index',
      fetchPositions: 'resources/positions',
      //
      show: 'resume/show',
      update: 'resume/update',
      getInfo: 'auth/getInfo',
      setForm: 'resume/setForm',
      storeImg: 'resume/storeImg',
      fetchDistricts: 'region/districts',
      getAppealsStatuses: 'resume/getAppealsStatuses'
    }),
    validate() {
      let validated = false
      this.$refs.form.validate((valid) => {
        validated = valid
      })
      return validated
    },
    changeRegion() {
      this.form.region_id = this.regionModel
      this.fetchDistricts(this.form.region_id)
    },
    changeDistrict() {
      this.form.city_id = this.districtModel
      this.regionModel = this.form.region_id ? String(this.form.region_id).substring(0, 4) : ''
    },
    translateDistrict(district) {
      let Translate = ''
      switch (this.locale) {
        case 'ru':
          Translate = this.capitalize(district.name_ru)
          break
        case 'uzln':
          Translate = this.capitalize(district.name_uz_ln)
          break
        case 'uzcl':
          Translate = this.capitalize(translater.latcyr(district.name_uz_cl))
          break
      }
      return Translate
    },
    capitalize(str) {
      const string = str.charAt(0).toUpperCase() + str.slice(1)
      return string
    },
    calcAge(birth_date) {
      var today = new Date()
      var birthDate = new Date(birth_date)
      var age = today.getFullYear() - birthDate.getFullYear()
      var m = today.getMonth() - birthDate.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      return age
    },
    onUpdate() {
      if (this.validate()) {
        this.update({ data: this.form, id: this.userInfo.resume.id })
          .then((res) => {
            this.$notify({
              title: this.$t('Успешно'),
              message: this.$t('Успешно сохранено'),
              type: 'success'
            })
            this.$router.push({ name: 'CitizenShow', params: { id: this.userInfo.resume.id }})
          }).catch((error) => {
            this.$notify({
              title: this.$t('Ошибка'),
              message: this.$t('Невозможно сохранить'),
              type: 'error'
            })
            console.log(error)
          })
      } else {
        this.$notify({
          title: this.$t('Ошибка'),
          message: this.$t('Заполните все поля'),
          type: 'error'
        })
      }
    },
    async handleChange(file) {
      this.fileList = []
      const formData = new FormData()
      formData.append('file', file.raw)
      formData.append('resume_id', this.userInfo.resume.id)
      this.storeImg(formData)
        .then((res) => {
          this.photoUrl = process.env.VUE_APP_BASE_URL + res.data.photo
          if (res.success) {
            this.$notify({
              title: 'Муваффақиятли',
              message: 'Файл сақланди.',
              type: 'success'
            })
          }
        })
        .catch((error) => {
          console.log(error)
          this.$notify({
            title: 'Хатолик',
            message:
                'Расм формати jpeg, png, jpg ва ҳажми 2мб дан ошмаслиги керак',
            type: 'error'
          })
        })
      this.fileList = []
    },
    handleExceed(files, fileList) {
      this.$message.warning('Битта файл юклашингиз мумкин')
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`Юкланган ${file.name} файлини бекор қиласизми  ?`)
    },
    notFile() {
      this.$message.warning('Файл мавжуд эмас!')
    },
    onSearch(search) {
      console.log('xxx', search)
      if (search.length >= 3) {
        this.loading = true
        // ?search=mene&language=uz-ln
        const query = {
          search: search,
          language: 'uz-ln'
        }
        this.fetchPositions(query).then(res => {
          if (res.success) {
            this.positions = res.data
            this.loading = false
          } else {
            this.loading = false
          }
        })
      }
    },
    translateFamilyStatus(family_state) {
      let Translate = ''
      switch (this.locale) {
        case 'ru':
          Translate = family_state.name_ru
          break
        case 'uzln':
          Translate = family_state.name_uz
          break
        case 'uzcl':
          Translate = family_state.name_cyrl
          break
      }
      return Translate
    },
    destroy() {
      const formData = new FormData()
      formData.append('remove_image', true)
      formData.append('resume_id', this.userInfo.resume.id)
      this.$confirm('Малумот ўчирилиб ташланади. Давом этасизми?', {
        confirmButtonText: 'Ҳа',
        cancelButtonText: 'Йўқ',
        type: 'warning'
      })
        .then(() => {
          this.storeImg(formData)
            .then(() => {
              this.photoUrl = null
              this.$notify({
                title: 'Муваффақиятли',
                message: 'Маълумот ўчирилди .',
                type: 'success'
              })
            })
            .catch((error) => {
              console.log(error)
              this.$notify({
                title: 'Хатолик',
                message:
                'Маълумотни ўчиришда хатолик юз берди',
                type: 'error'
              })
            })
        })
        .catch(() => {})
    },
    // studentCheck(institutions) {
    //   institutions.forEach(institution => {
    //     institution
    //   })
    //   if (condition) {

    //   } else {

    //   }
    // },
    addEducation() {
      this.educationDialog = true
      // this.$router.push({ name: 'EducationCreate' })
    },
    setCollage(collage) {
      this.is_education = false
      if (collage !== false) {
        this.form.education.push(collage)
      }
    }

  }
}
</script>
<style scope>
.el-collapse{
    max-width: 100%;
}
.selecttt{
    flex-basis: 100%;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0 2px;
    position: relative;
}
</style>
