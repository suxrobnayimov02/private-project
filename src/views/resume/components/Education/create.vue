<template>
  <div class="mainContainer">
    <div>
      <el-dialog v-model="dialogFormVisible" :title="$t('Таълим маълумоти қўшиш')" :before-close="handleClose">
        <div class="box-shadow pb-4">
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
              <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
                <el-form-item :label="$t('Уровень образования') + ':'" prop="education_level_id">
                  <el-select
                    v-model="form.education_level_id"
                    class="w-100"
                    filterable
                    :disabled="edu_type_disabled"
                  >
                    <el-option
                      v-for="item in educationLevels"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col v-if="form.education_level_id == 4" :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
                <el-form-item label=" ">
                  <el-checkbox v-model="form.currently_studying" class="float-right">{{ $t('студент(ка) ВУЗа') }}</el-checkbox>
                </el-form-item>
              </el-col>
              <el-col :span="18">
                <el-form-item label="Таълим муассасаси номи" prop="education_place">
                  <el-input v-model="form.education_place" class="w-100" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Мутахассислик(Йўналиш)" prop="faculty">
                  <el-input v-model="form.faculty" class="w-100" />
                </el-form-item>
              </el-col>             
            </el-row>
            <el-row>
              <el-col :span="6">
                <el-form-item label="Кирган йили" prop="start_year">
                  <el-select v-model="form.start_year">
                    <el-option v-for="y in years.slice(1, years.length)" :key="y" :label="y" :value="y" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col v-if="!form.currently_studying" :span="6">
                <el-form-item label="Битирган йили" prop="end_year">
                  <el-select v-model="form.end_year">
                    <el-option v-for="y in years" :key="y" :label="y" :value="y" />
                  </el-select>
                </el-form-item>
              </el-col>
              
            </el-row>
          </el-form>
          <el-button type="primary" icon="el-icon-check" class="float-right" @click="save">Сақлаш</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Otm',
  props: {
    createOrUpdate: {
      type: String,
      default() {
        return ''
      }
    },
    educationDialog: {
      type: Boolean,
      default() {
        return false
      }
    },
    educationLevels: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      form: {
        user_id: null,
        education_level_id: null,
        education_place: '',
        faculty: '',
        currently_studying: false,
        start_year: null,
        end_year: null
      },
      dialogFormVisible: false,
      editLoading: false,
      diploma_given_date: '01.01.2019',
      showDate: false,
      faculties: [],
      degrees: [
        { name: 'Бакалавр', id: 1 }, { name: 'Магистр', id: 2 }, { name: 'Мутахассис', id: 3 }
      ],
      rules: {
        education_level_id: [
          {
            required: true,
            message: 'To\'ldirish joiz bo\'lgan maydonlar',
            trigger: 'change'
          }
        ],
        education_place: [
          {
            required: true,
            message: 'To\'ldirish joiz bo\'lgan maydonlar',
            trigger: 'change'
          }
        ],
        faculty: [
          {
            required: true,
            message: 'To\'ldirish joiz bo\'lgan maydonlar',
            trigger: 'change'
          }
        ],
        start_year: [
          {
            required: true,
            message: 'To\'ldirish joiz bo\'lgan maydonlar',
            trigger: 'change'
          }
        ],
        end_year: [
          {
            required: true,
            message: 'To\'ldirish joiz bo\'lgan maydonlar',
            trigger: 'change'
          }
        ]      
      }
    }
  },
  computed: {
    ...mapGetters({ user: 'auth/USER' }),
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
    this.dialogFormVisible = this.educationDialog
    if (this.$route.name === 'OtmUpdate') {
      this.editLoading = true
      this.setForm()
    }
    setTimeout(() => { this.showDate = true }, 300)
  },
  methods: {
    ...mapActions({ getOtms: 'otm/otms', getFaculties: 'otm/faculties', create: 'education/store', update: 'otm/update' }),
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
        this.form.user_id = this.user.id
        if (true) {
          this.create(this.form).then((res) => {
            if (res.success) {
              Swal.fire({
                title: 'Маълумотлар сақланди!',
                type: 'success',
                timer: 1500,
                showConfirmButton: false,
                confirmButtonText: 'Давом этиш'
              })
              this.$emit('save')
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
            this.$emit('close')
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
    handleClose(done) {
      this.$confirm('Bekor qilmoqchimisiz?', {
        confirmButtonText: 'Ha',
        cancelButtonText: 'Yo\'q',
        type: 'warning' })
        .then(() => {
          this.$emit('close')
          done()
        })
        .catch(() => {
          // catch error
        })
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
