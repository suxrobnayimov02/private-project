<template>
  <div class="mainContainer">
    <div>
      <!-- <router-link :to="{ name: 'CitizenShow' }">
        <el-button type="text" icon="el-icon-arrow-left">Профилга қайтиш</el-button>
      </router-link> -->
      <el-dialog :title="$t('Олий маълумот қўшиш')" :visible.sync="dialogFormVisible">
        <el-card class="box-shadow pb-4">
          <el-form
            v-if="!editLoading"
            ref="form"
            :model="form"
            :rules="rules"
            label-position="top"
            class="top-label-custom"
          >
            <!-- <el-divider content-position="left"> </el-divider> -->
            <el-row>
              <el-col :span="18">
                <el-form-item label="Олий талим муассасаси" prop="otm_id">
                  <el-select v-model="form.otm_id" class="w-100">
                    <el-option v-for="otm in otms" :key="otm.id" :label="otm.name" :value="otm.id" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="Даража" prop="degree">
                  <el-select v-model="form.degree" class="w-100">
                    <el-option v-for="degre in degrees" :key="degre.id" :label="degre.name" :value="degre.id" />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <el-form-item label="ОТМга кирган йили" prop="education_stared_year">
                  <el-select v-model="form.education_stared_year">
                    <el-option v-for="y in years.slice(1, years.length)" :key="y" :label="y" :value="y" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="ОТМни битирган йили" prop="education_finished_year">
                  <el-select v-model="form.education_finished_year">
                    <el-option v-for="y in years" :key="y" :label="y" :value="y" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Мутахассислик" prop="faculty_id">
                  <el-select v-model="form.faculty_id" class="w-100" :filterable="true">
                    <el-option
                      v-for="faculty in faculties"
                      :key="faculty.id"
                      :label="faculty.name"
                      :value="faculty.id"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="Диплом серияси ва рақами" prop="diploma">
                  <el-input v-model="form.diploma" placeholder="XX0000000" />
                </el-form-item>
              </el-col>
              <el-col :span="16">
                <el-form-item label="Диплом берилган сана" prop="diploma_given_date">
                  <!-- <date-dropdown
                    v-if="showDate"
                    v-model="form.diploma_given_date"
                    class="w-100"
                    min="1950"
                    :max="currentYear"
                    :default="diploma_given_date"
                    months-names="Январь, Февраль, Март, Апрель, Май, Июнь, Июль, Август, Сентябрь, Октябрь, Ноябрь, Декабрь"
                  /> -->
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <el-button type="primary" icon="el-icon-check" class="float-right" @click="save">Сақлаш</el-button>
          <el-button icon="el-icon-close" class="float-right  mr-2" @click="cancel">Бекор қилиш</el-button>
        </el-card>
      </el-dialog>
    </div>
  </div>
</template>

<script>
// import DateDropdown from 'vue-date-dropdown'
import Swal from 'sweetalert2'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Otm',
  // components: { DateDropdown },
  props: {
    createOrUpdate: {
      type: String,
      default() {
        return ''
      }
    },
    otmDialog: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      form: {
        id: null,
        otm_id: '',
        pin: '',
        institution_id: '',
        degree: '',
        education_stared_year: null,
        education_finished_year: null,
        isApplications: false,
        faculty_id: null,
        diploma: '',
        diploma_given_date: '01.01.2019'
      },
      dialogFormVisible: true,
      editLoading: false,
      diploma_given_date: '01.01.2019',
      showDate: false,
      faculties: [],
      degrees: [
        { name: 'Бакалавр', id: 1 }, { name: 'Магистр', id: 2 }, { name: 'Мутахассис', id: 3 }
      ],
      rules: {
        otm_id: [
          {
            required: true,
            message: 'Олий талим муассасаси киритилмаган',
            trigger: 'change'
          }
        ],
        education_stared_year: [
          {
            required: true,
            message: 'ОТМга кирган йили кўрсатилмаган',
            trigger: 'change'
          }
        ],
        education_finished_year: [
          {
            required: true,
            message: 'ОТМни битирган йили кўрсатилмаган',
            trigger: 'change'
          }
        ],
        faculty_id: [
          {
            required: true,
            message: 'Факультет кўрсатилмаган',
            trigger: 'change'
          }
        ],
        schoolarship_type: [
          {
            required: true,
            message: 'Талим тури кўрсатилмаган',
            trigger: 'change'
          }
        ],
        diploma_seria: [
          { required: true, message: 'Сериа киритилмаган', trigger: 'change' }
        ],
        diploma: [
          {
            required: true,
            pattern: '^.{6,}$',
            message: 'Белгилар сони камида 6 та бўлиши керак',
            trigger: 'change'
          }
        ],
        degree: [
          { required: true, message: 'Даража кўрсатилмаган', trigger: 'change' }
        ],
        diploma_given_date: [
          { required: true, message: 'Диплом берилган сана кўрсатилмаган', trigger: 'change' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters({ otms: 'otm/GET_ALL_OTMS', user: 'auth/USER' }),
    currentYear() {
      return String(new Date().getFullYear())
    },
    years() {
      const arr = []
      for (let i = this.currentYear; i > 1949; i--) {
        arr.push(i)
      }
      return arr
    }
  },
  watch: {
    'form.education_stared_year'(newVal) {
      if (this.form.otm_id && !this.editLoading) {
        this.fetchFaculties()
      }
    },
    'form.education_finished_year'(newVal) {
      if (newVal < this.form.education_stared_year + 1) {
        this.$msgbox({
          title: 'Хатолик', type: 'warning', confirmButtonText: 'OK', message: 'ОТМни битирган ва йили ОТМга кирган йили орасидаги фарқ камида 1 йил бўлиши керак!'
        })
        this.form.education_finished_year = this.form.education_finished_year + 1
      }
    },
    'form.otm_id'(newVal, oldVal) {
      if ((newVal && newVal !== oldVal) && !this.editLoading) {
        this.form.institution_id = this.otms.find(otm => otm.id === newVal).institution_id
        this.form.faculty_id = null
        if (this.form.education_finished_year && this.form.education_stared_year) {
          this.fetchFaculties()
        }
      }
    },
    'form.diploma'(newVal) {
      this.form.diploma = newVal.toUpperCase()
    }
  },
  created() {
    this.dialogFormVisible = this.otmDialog
    if (this.$route.name === 'OtmUpdate') {
      this.editLoading = true
      this.setForm()
    }
    setTimeout(() => { this.showDate = true }, 300)
    this.form.pin = this.user.resume.pin
    this.getOtms()
  },
  methods: {
    ...mapActions({ getOtms: 'otm/otms', getFaculties: 'otm/faculties', create: 'otm/create', update: 'otm/update' }),
    fetchFaculties() {
      this.form.faculty_id = null
      this.showDate = false
      const finish_year = 1 * this.form.education_stared_year + (this.form.degree === 2 ? 2 : 4)
      this.form.education_finished_year = finish_year <= this.currentYear ? finish_year : this.currentYear
      this.diploma_given_date = '01.01.' + this.form.education_finished_year
      this.getFaculties({ otm_id: this.form.otm_id, begin_year: this.form.education_stared_year, finish_year: this.form.education_finished_year }).then(res => {
        this.faculties = res.data !== 'Faculties not found!' ? res.data : []
      })
      setTimeout(() => { this.showDate = true }, 300)
    },
    save() {
      if (this.validate()) {
        this.form.diploma_given_date = this.form.diploma_given_date.split('.').reverse().join('-')
        if (this.create_or_update === 'create') {
          this.create(this.form).then((res) => {
            if (res.success) {
              Swal.fire({
                title: 'Маълумотлар сақланди!',
                type: 'success',
                timer: 1500,
                showConfirmButton: false,
                confirmButtonText: 'Давом этиш'
              })
              this.dialogFormVisible = false
            } else {
              const message = res.code === 441 ? 'Ушбу диплом аввал рўйхатга олинган!' : 'Хатолик!'
              Swal.fire({
                title: message,
                type: 'error',
                timer: 1500,
                showConfirmButton: false,
                confirmButtonText: 'Давом этиш'
              })
            }
          })
        } else {
          this.update(this.form).then((res) => {
            if (res.success) {
              Swal.fire({
                title: 'Маълумотлар сақланди!',
                type: 'success',
                timer: 1500,
                showConfirmButton: false,
                confirmButtonText: 'Давом этиш'
              })
              this.dialogFormVisible = false
            } else {
              const message = res.code === 441 ? 'Ушбу диплом аввал рўйхатга олинган!' : 'Хатолик!'
              Swal.fire({
                title: message,
                type: 'error',
                timer: 1500,
                showConfirmButton: false,
                confirmButtonText: 'Давом этиш'
              })
            }
          })
        }
      }
    },
    validate() {
      let validated = false
      this.$refs.form.validate((valid) => {
        validated = valid
      })
      return validated
    },
    cancel() {
      this.dialogFormVisible = false
    },
    setForm() {
      const diplom = JSON.parse(localStorage.getItem('diplom'))
      this.form.id = diplom.id
      this.form.isApplications = diplom.isApplications
      this.form.otm_id = diplom.otm_id
      this.form.institution_id = diplom.institution_id
      this.form.degree = this.degrees.find(degree => degree.name === diplom.degree) ? this.degrees.find(degree => degree.name === diplom.degree).id : null
      this.form.education_stared_year = diplom.education_started_year
      this.form.education_finished_year = diplom.education_finished_year
      this.form.diploma = diplom.diploma
      this.diploma_given_date = diplom.diploma_given_date
      this.getFaculties({ otm_id: this.form.otm_id, begin_year: this.form.education_stared_year, finish_year: this.form.education_finished_year }).then(res => {
        this.faculties = res.data
        this.form.faculty_id = diplom.faculty_id
      }).finally(() => {
        setTimeout(() => { this.editLoading = false }, 200)
      })
    }
  }
}
</script>

<style scoped>
.mx-auto {
  padding-top: 130px;
}
.container {
  width: 50%;
}
</style>
