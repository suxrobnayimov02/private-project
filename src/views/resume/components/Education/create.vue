<template>
  <div class="mainContainer">
    <div>
      <el-dialog v-model="dialogFormVisible" :title="$t('Ta\'lim ma\'lumoti qo\'sh\'ish')" :before-close="handleClose">
        <div class="box-shadow pb-4">
          <el-form
            v-if="!editLoading"
            ref="form"
            :model="form"
            :rules="rules"
            label-position="top"
            class="top-label-custom"
          >
            <el-row>
              <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
                <el-form-item :label="$t('Ta\'lim darajasi') + ':'" prop="education_level_id">
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
              <el-col :span="18">
                <el-form-item label="Ta'lim muassasasi nomi" prop="education_place">
                  <el-input v-model="form.education_place" class="w-100" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Mutaxasislik(yo'nalish)" prop="faculty">
                  <el-input v-model="form.faculty" class="w-100" />
                </el-form-item>
              </el-col>             
            </el-row>
            <el-row>
              <el-col :span="6">
                <el-form-item label="Kirgan yili" prop="start_year">
                  <el-select v-model="form.start_year">
                    <el-option v-for="y in years" :key="y" :label="y" :value="y" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col v-if="!form.currently_studying" :span="6">
                <el-form-item label="Bitirgan yili" prop="end_year">
                  <el-select v-model="form.end_year">
                    <el-option v-for="y in years" :key="y" :label="y" :value="y" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
                <el-form-item label="" class="mt5">
                  <el-checkbox v-model="form.currently_studying">{{ $t('Hozir ham o\'qiyapman') }}</el-checkbox>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <el-button type="primary" icon="el-icon-check" class="float-end" @click="save">Saqlash</el-button>
        </div>
      </el-dialog>
      <el-row>
        <p class="text-primary mt-2" style="cursor:pointer" size="mini" @click="addEducation"><i class="el-icon-plus" /> {{ $t('Ta\'lim ma\'lumoti qo\'shish') }}</p>
      </el-row>
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
        id: null,
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
    'form.currently_studying'(newVal, oldVal) {
      if (newVal && newVal !== oldVal) {
        this.form.end_year = null
      }
    }   
  },
  created() {
    this.dialogFormVisible = this.educationDialog    
  },
  methods: {
    ...mapActions({ fetchEdu: 'education/show', create: 'education/store', update: 'education/update' }),
    edit(id) {
      this.fetchEdu(id).then((res) => {
        this.setForm(res.data)
        this.dialogFormVisible = true
      })
    },
    addEducation() {
      this.dialogFormVisible = true
    },
    action(data) {
      if (!this.form.id) return this.create(data)
      else return this.update(data)
    },
    save() {    
      if (this.validate()) {
        this.form.user_id = this.user.id
        this.action(this.form).then((res) => {
          if (res.success) {            
            Swal.fire({
              title: 'Ma\'lumotlar saqlandi!',
              type: 'success',
              timer: 1500,
              showConfirmButton: false
            })
            this.dialogFormVisible = false
            this.dialogVisible = false
            this.$emit('save')
          } else {
            Swal.fire({
              title: 'Error!',
              type: 'error',
              timer: 1500,
              showConfirmButton: false
            })
          }
        }).catch(() => {
          Swal.fire({
            title: 'Error!',
            type: 'error',
            timer: 1500,
            showConfirmButton: false
          })
        })
      } else {
        ElMessage({
          showClose: true,
          message: 'Talab qilingan maydonalarni to\'ldiring'
        })
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
    setForm(edu) {
      this.form.id = edu.id
      this.form.education_level_id = edu.education_level_id
      this.form.education_place = edu.education_place
      this.form.faculty = edu.faculty
      this.form.currently_studying = edu.currently_studying
      this.form.start_year = edu.start_year
      this.form.end_year = edu.end_year
      // this.getFaculties({ otm_id: this.form.otm_id, begin_year: this.form.education_stared_year, finish_year: this.form.education_finished_year }).then(res => {
      //   this.faculties = res.data
      //   this.form.faculty_id = diplom.faculty_id
      // }).finally(() => {
      //   setTimeout(() => { this.editLoading = false }, 200)
      // })
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
