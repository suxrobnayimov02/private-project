<template>
  <div v-if="is_auth && user" class="contentBlock clearfix container">
    <div class="grid-content bg-purple-dark">
      <h2 style="text-align: center; font-weight: bold">{{ $t('Резуме') }}</h2>
    </div>
    <hr>
    <h3 class="text-gray-700 text-m font-bold text-left text-primary text-center" style="height: 35px">
      {{ user.fullname }}
    </h3>
    <el-row :gutter="40">
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
        <div class="grid-content bg-purple" justify="end" style="text-align: center">
          <!-- <template v-if="photoUrl">
            <img :src="photoUrl" alt="image" width="150px" style="min-height: 160px">
          </template> -->
          <img
            src="@/assets/images/businessman.svg"
            alt="image"
            width="150"
          ><br>
          <!-- <div class="mt-2 clearfix">
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
          </div> -->
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18" class="mb-3">
        <el-row class="mt-3">
          <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b class="text-muted">{{ $t('Yoshi') }}:</b></el-col>
          <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b>{{ user.age }}</b></el-col>
        </el-row>
        <el-row class="mt-3">
          <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b class="text-muted">{{ $t('Jinsi') }}:</b></el-col>
          <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
            <span v-if="user.data.gender"><b>{{ $t('Erkak') }}</b></span>
            <span v-else><b>{{ $t('Ayol') }}</b></span>
          </el-col>
        </el-row>
        <el-row class="mt-3">
          <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b class="text-muted">{{ $t('Telefoni') }}:</b></el-col>
          <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b>+{{ user.data.contact_number }}</b></el-col>
        </el-row>
        <el-row class="mt-3">
          <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b class="text-muted">{{ $t('Email') }}:</b></el-col>
          <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b>{{ user.data.email }}</b></el-col>
        </el-row>
      </el-col>
    </el-row>
    <br>
    <el-divider content-position="left">
      <img alt="logo" src="@/assets/images/career-promotion.svg" height="22px" class="mr-2 mt-1">
      {{ $t('Yashash manzili') }}
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
        <el-col :span="16">
          <el-row>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <div class="formControl">
                <el-form-item :label="$t('Hudud') + ':'" prop="soato_region">
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
                <el-form-item :label="$t('Tuman') + ':'" prop="soato_district">
                  <div class="field withBackground">
                    <select v-model="districtModel" @change="changeDistrict()">
                      <option value="">{{ $t('Выберите') }}</option>
                      <template v-if="districts && districts.length">
                        <option v-for="(district, index) of districts" :key="index" :value="district.soato">
                          {{ translateDistrict(district) }}
                        </option>
                      </template>
                    </select>
                  </div>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <!-- Position/salary -->
          <el-divider content-position="left">
            <img alt="logo" src="@/assets/images/career-promotion.svg" height="22px" class="mr-2 mt-1">
            {{ $t('Ishga doir ma\'lumotlar') }}
          </el-divider>
          <el-row>
            <el-col :span="24">
              <el-form-item :label="$t('Istayotgan lavozimingiz')" prop="kodp_key">
                <el-select
                  v-model="form.kodp_key"
                  class="w-100"
                  filterable
                  remote
                  reserve-keyword
                  :placeholder="$t('Lavozim nomini kiriting')"
                  :remote-method="onSearch"
                  :loading="loading"
                >
                  <el-option
                    v-for="item in positions"
                    :key="item.id"
                    :label="(locale == 'ru') ? item.name_uz : (locale == 'uzln') ? item.name_uz:item.name_uz"
                    :value="item.key"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
              <el-form-item :label="$t('Ish haqi')">
                <input v-model="form.salary" v-money="money" class="text-right text-right  el-input__inner">
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="3" :xl="3">
              <el-form-item label=" ‎">
                <el-select v-model="form.salary_currency_id" placeholder="UZS">
                  <el-option v-for="item in salaryCurrencies" :key="item.id" :label="item.name" :value="item.id" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <el-form-item label="Kelishsa bo'ladimi?‎">
                <el-radio v-model="form.is_agreed_salary" :label="true">{{ $t('Ha') }}</el-radio>
                <el-radio v-model="form.is_agreed_salary" :label="false">{{ $t('Yo\'q') }}</el-radio>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- График работы -->
          <el-row>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <div class="demo-collapse">
                <el-collapse v-model="activeNames">
                  <el-collapse-item :title="$t('Ish grafigi')" name="1">
                    <template v-if="busynessTypes && busynessTypes.length !== 0">
                      <div v-for="(type, index) in busynessTypes" :key="'schedule' +index">
                        <el-checkbox v-model="form.busyness_type_ids" :label="type.id">
                          {{ (locale == 'ru')?type.name:(locale == 'uzln')?type.name:type.name }}
                        </el-checkbox>
                      </div>
                    </template>
                    <span v-else class="label label-red mr-2">{{ $t('Нет') }}</span>
                  </el-collapse-item>
                  <el-collapse-item :title="$t('Bandlik turi')" name="2">
                    <template v-if="workGraphics && workGraphics.length !== 0">
                      <div v-for="type in workGraphics" :key="'emp' + type.id">
                        <el-checkbox v-model="form.work_graphic_ids" :label="type.id">
                          {{ (locale == 'ru')?type.name:(locale == 'uzln')?type.name:type.name }}
                        </el-checkbox>
                      </div>
                    </template>
                    <span v-else class="label label-red mr-2">{{ $t('Нет') }}</span>
                  </el-collapse-item>
                  <el-collapse-item :title="$t('Ko\'chish')" name="3">
                    <template v-if="businessTrips && businessTrips.length !== 0">
                      <div v-for="type in businessTrips" :key="'trip' + type.id">
                        <el-checkbox v-model="form.business_trip_ids" :label="type.id">
                          {{ (locale == 'ru')?type.name:(locale == 'uzln')?type.name:type.name }}
                        </el-checkbox>
                      </div>
                    </template>
                    <span v-else class="label label-red mr-2">{{ $t('Нет') }}</span>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </el-col>
          </el-row>
          <!-- ABOUT ME -->
          <el-row>
            <el-col :xs="24" :sm="24" :lg="12" :xl="12">
              <el-form-item :label="$t('O\'zim haqimda') + ':'">
                <el-input v-model="form.additional_info" type="textarea" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="24" :lg="12" :xl="12">
              <el-form-item :label="$t('Hobbi') + ':'">
                <el-input v-model="form.hobbies" type="textarea" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <el-form-item :label="$t('Haydovchilik guvohnomasi') + ':'">
                <el-select v-model="form.drivers_license" :placeholder="$t('Guvohnoma mavjud emas')" class="w100" multiple>
                  <el-option v-for="item in driversLicenses" :key="item.id" :label="item.name" :value="item.id" />
                </el-select>
                <!-- <el-checkbox-group v-for="(item, index) in driversLicenses" :key="'license' +index" v-model="form.drivers_license">
                  <el-checkbox :label="item.id">{{ item.name }}</el-checkbox>
                </el-checkbox-group> -->
              </el-form-item>
            </el-col>
          </el-row>
          <!-- LANGUAGES -->
          <el-row v-if="skillCategories && skillCategories.length" class="mt-1">
            <el-col>
              <languages :profile="user.resume" :locale="locale" />
            </el-col>
          </el-row>
          <!-- Образование/ТРУДОВАЯ ДЕЯТЕЛЬНОСТЬ -->
          <el-row>
            <el-divider content-position="left"><img alt="logo" src="@/assets/images/cap.svg" height="25px" class="ml-2 mt-1">
              {{ $t('Ta\'lim ma\'lumotlari') }}</el-divider>
            <div>
              <el-row v-if="educationDialog">
                <EducationCreate :form="education" :education-levels="educationLevels" :create-or-update="'create'" :education-dialog="educationDialog" @close="educationDialog = false" @save="setEducation" />
              </el-row>
              <el-row v-if="education && education.length">
                <EducationTable :education="education" />
              </el-row>
              <el-row v-else>
                <p class="text-center">{{ $t('Нет информации') }}</p>
              </el-row>
              <el-row>
                <el-button
                  class="float-right mt-5"
                  type="primary"
                  size="mini"
                  icon="el-icon-plus"
                  @click="addEducation"
                >Ta'lim ma'lumoti qo'shish</el-button>
              </el-row>
            </div>
            <br>
            <br>
            <el-divider content-position="left"><i class="el-icon-s-cooperation" /> {{ $t('Mehnat faoliyati') }} </el-divider>
            <el-row class="mt-5">
              <experience-index ref="experienceList" @edit="$refs.experienceCreate.edit($event)" />
              <experience-create ref="experienceCreate" @successSaved="$refs.experienceList.index()" />
            </el-row>
          </el-row>
          <hr>
          <el-form-item>
            <el-button type="success" class="float-right" @click="save">{{ $t('Saqlash') }}</el-button>
          </el-form-item>

        </el-col>
        <el-col :span="8" />
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import EducationTable from './components/resume/education'
import EducationCreate from './components/Education/create.vue'
import { translater } from '../../utils/translater'
import ExperienceIndex from './components/experience/index'
import ExperienceCreate from './components/experience/create'
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
      mask: '##',
      loaded: false,
      form: {
        user_id: null,
        pin: null,
        drivers_license: [],
        want_salary: null,
        about: null,
        additional_info: null,
        computer_skill: null,
        hobbies: null,
        is_student: 0,
        work_schedule: null,
        employment_id: null,
        wanted_work: true,
        soato_region: null,
        soato_district: null,
        // form work
        kodp_key: null,
        salary: null,
        salary_currency_id: 1,
        is_agreed_salary: false,
        busyness_type_ids: [],
        work_graphic_ids: [],
        business_trip_ids: [],
        nskz: null
      },
      money: {
        decimal: '.',
        thousands: ',',
        suffix: '',
        precision: 0,
        masked: false
      },
      educationDialog: false,
      loading: false,
      regionModel: null,
      districtModel: null,
      edu_degrees: [],
      photoUrl: null,
      fileList: [],
      activeNames: [],
      scheduleTypes: [],
      employmentTypes: [],
      rules: {
        soato_region: [
          { required: true, message: this.$t('Заполните это поле'), trigger: 'change' }
        ],
        soato_district: [
          { required: true, message: this.$t('Заполните это поле'), trigger: 'change' }
        ],
        drivers_license: [
          { required: true, message: this.$t('Заполните это поле'), trigger: 'change' }
        ],
        kodp_key: [
          { required: true, message: this.$t('Заполните это поле'), trigger: 'change' }
        ],
        salary: [
          { required: true, message: this.$t('Заполните это поле'), trigger: 'change' }
        ],
        additional_info: [
          { required: true, message: this.$t('Заполните это поле'), trigger: 'change' }
        ],
        hobbies: [
          { required: true, message: this.$t('Заполните это поле'), trigger: 'change' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters({
      locale: 'app/LOCALE',
      is_auth: 'auth/GET_IS_AUTH',
      resume: 'resume/RESUME',
      regions: 'region/GET_REGIONS',
      positions: 'resources/GET_POSITIONS',
      education: 'education/GET_EDUCATIONS',
      driversLicenses: 'resources/GET_DRIVERS_LICENSES',
      skillCategories: 'resources/GET_SKILL_CATEGORIES',
      skillLevels: 'resources/GET_SKILL_LEVELS',
      educationLevels: 'resources/GET_EDUCATION_LEVELS',
      businessTrips: 'resources/GET_BUSINESS_TRIPS',
      busynessTypes: 'resources/GET_BUSYNESS_TYPES',
      workGraphics: 'resources/GET_WORK_GRAPHICS',
      salaryCurrencies: 'resources/GET_SALARY_CURRENCIES',
      districts: 'region/GET_DISTRICTS'
    })

  },
  watch: {
    'form.kodp_key'(newVal, oldVal) {
      if (newVal && newVal !== oldVal) {
        if (this.positions && this.positions.length) {
          this.positions.forEach(position => {
            if (position.key == newVal) {
              this.form.nskz = position.nskz_code
            }
          })
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
    await this.getInfo()
      .then(() => {
        this.setEducation()
      })
      .catch(() => {
        if (!(this.user && this.user.id)) {
          this.$router.push({ name: 'Register' })
        }
      })
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
      fetchEdus: 'education/index',
      store_work_seeker: 'resources/store_work_seeker',
      update_seeker_profiles: 'resources/update_seeker_profiles',

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
      this.form.soato_region = this.regionModel
      this.form.soato_district = null
      this.fetchDistricts(this.form.soato_region)
    },
    changeDistrict() {
      this.form.soato_district = this.districtModel
      this.regionModel = this.form.soato_region ? String(this.form.soato_region).substring(0, 4) : ''
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
        this.update({ data: this.form, id: this.user.resume.id })
          .then((res) => {
            this.$notify({
              title: this.$t('Успешно'),
              message: this.$t('Успешно сохранено'),
              type: 'success'
            })
            this.$router.push({ name: 'CitizenShow', params: { id: this.user.resume.id }})
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
    save() {
      if (this.validate()) {
        const dataWork = {
          user_id: this.user.id,
          kodp_key: this.form.kodp_key,
          salary: this.form.salary,
          salary_currency_id: this.form.salary_currency_id,
          is_agreed_salary: this.form.is_agreed_salary,
          busyness_type_ids: this.form.busyness_type_ids,
          work_graphic_ids: this.form.work_graphic_ids,
          business_trip_ids: this.form.business_trip_ids,
          nskz: this.form.nskz
        }
        const dataProfile = {
          user_id: this.user.id,
          soato_district: this.form.soato_district,
          soato_region: this.form.soato_region,
          wanted_work: this.form.wanted_work,
          hobbies: this.form.hobbies,
          drivers_license: this.form.drivers_license,
          additional_info: this.form.additional_info
        }
        this.store_work_seeker(dataWork)
          .then((res) => {
            this.update_seeker_profiles(dataProfile)
              .then((res) => {
                this.$notify({
                  title: this.$t('Успешно'),
                  message: this.$t('Успешно сохранено'),
                  type: 'success'
                })
                this.$router.push({ name: 'Home' })
              }).catch((error) => {
                this.$notify({
                  title: this.$t('Ошибка'),
                  message: this.$t('Невозможно сохранить'),
                  type: 'error'
                })
                console.log(error)
              })
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
      formData.append('resume_id', this.user.resume.id)
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
      if (search.length >= 3) {
        this.loading = true
        const query = {
          search: search,
          language: 'uz-ln'
        }
        this.fetchPositions(query).then(res => {
          if (res.success) {
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
      formData.append('resume_id', this.user.resume.id)
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
    setEducation() {
      this.educationDialog = false
      this.fetchEdus({ user_id: this.user.id })
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
.el-collapse-item__header {
    border-bottom-color: transparent;

    line-height: 14px !important;
    font-weight: bold !important;
}
.w100 {
  width: 100%;
}
</style>
