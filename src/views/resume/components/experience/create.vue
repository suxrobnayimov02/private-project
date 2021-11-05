<template>
  <div class="w-100">
    <el-dialog v-model="dialogVisible" title="Ish tajribasini qo'shish">
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        label-position="top"
        class="top-label-custom"
      >
        <el-row>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form-item :label="$t('Hudud')" prop="soato_region">
              <el-select v-model="form.soato_region" class="w-100" @change="getDistricts">
                <el-option
                  v-for="item in regions"
                  :key="item.soato"
                  :label="item.name_uz_ln"
                  :value="item.soato"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form-item :label="$t('Tuman(Shaxar)')" prop="soato_district">
              <el-select v-model="form.soato_district" class="w-100">
                <el-option
                  v-for="item in districts"
                  :key="item.soato"
                  class="w-100"
                  :label="item.name_uz_ln"
                  :value="item.soato"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form-item :label="$t('Tashkilot nomi')" prop="company_name">
              <el-input v-model="form.company_name" class="w-100" />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form-item :label="$t('Kasb(Lavozim)') + ':'" prop="kodp_key">
              <el-select
                v-model="form.kodp_key"
                class="w-100"
                filterable
                remote
                reserve-keyword
                :filter-method="kodp"
              >
                <el-option
                  v-for="item in positions"
                  :key="item.key"
                  :label="item['name_uz-ln']"
                  :value="item.key"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form-item label="Ishga kirgan sana" prop="start_date">
              <el-date-picker v-model="form.start_date" type="date" :disabled-date="disableDate" format="DD.MM.YYYY" value-format="YYYY-MM-DD" class="w-100" />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form-item label="Ishdan ketgan sana" prop="end_date">
              <el-date-picker v-model="form.end_date" type="date" :disabled-date="disableDateEnd" format="DD.MM.YYYY" value-format="YYYY-MM-DD" class="w-100" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="Vazifalar" prop="position_description">
              <el-input v-model="form.position_description" type="textarea" rows="3" class="w-100" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <template #footer>
        <el-button type="primary" icon="el-icon-check" @click="save">Сақлаш</el-button>
      </template>
    </el-dialog>
    <div>
      <el-button type="primary" size="mini" icon="el-icon-plus" @click="dialogVisible = true">{{ $t('Ish tajribasi qo\'shish') }}</el-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { ElMessage } from 'element-plus'
import Swal from 'sweetalert2'
export default {
  name: 'ExperienceCreate',
  data() {
    return {
      dialogVisible: false,
      form: {
        id: null,
        user_id: null,
        is_current_job: false,
        start_date: null,
        end_date: null,
        kodp_key: null,
        company_name: null,
        soato_district: null,
        soato_region: null,
        position_description: null
      },
      rules: {
        start_date: [{ required: true, message: 'To\'ldirish joiz bo\'lgan maydon', trigger: 'change' }],
        kodp_key: [{ required: true, message: 'To\'ldirish joiz bo\'lgan maydonl', trigger: 'change' }],
        company_name: [{ required: true, message: 'To\'ldirish joiz bo\'lgan maydonl', trigger: 'change' }],
        soato_region: [{ required: true, message: 'To\'ldirish joiz bo\'lgan maydonl', trigger: 'change' }],
        soato_district: [{ required: true, message: 'To\'ldirish joiz bo\'lgan maydonl', trigger: 'change' }],
        position_description: [{ required: true, message: 'To\'ldirish joiz bo\'lgan maydonl', trigger: 'change' }]
      }
    }
  },
  computed: {
    ...mapGetters({ positions: 'resources/GET_POSITIONS', regions: 'region/GET_REGIONS', districts: 'region/GET_DISTRICTS', item: 'experience/GET_ITEM' }),
    years() {
      const i = this.currentYear
      const arr = []
      while (i > 1950) {
        arr.push(i)
      }
      return arr
    }
  },
  methods: {
    kodp(search) {
      if (search && search.length > 2) {
        this.kodpAction({ search: search, language: 'uz-ln' })
      }
    },
    disableDate(time) {
      return time.getTime() > Date.now() || (this.form.end_date ? (time.getTime() > new Date(this.form.end_date).getTime()) : false)
    },
    disableDateEnd(time) {
      return time.getTime() > Date.now() || (this.form.start_date ? (time.getTime() < new Date(this.form.start_date).getTime()) : false)
    },
    getDistricts() {
      this.getDistrictsAction(this.form.soato_region)
    },
    validate() {
      let valid = false
      this.$refs.form.validate((validated) => valid = validated)
      return valid
    },
    edit(id) {
      this.show(id).then((res) => {
        this.setForm()
        this.dialogVisible = true
      })
    },
    action(data) {
      if (!this.form.id) return this.store(data)
      else return this.update(data)
    },
    save() {
      this.form.user_id = this.user.id
      if (this.validate()) {
        this.action(this.form).then((res) => {
          if (res.success) {
            Swal.fire({
              title: 'Ma\'lumotlar saqlandi!',
              type: 'success',
              timer: 1500,
              showConfirmButton: false
            })
            this.dialogVisible = false
            this.$emit('successSaved')
          } else {
            Swal.fire({
              title: 'Error!',
              type: 'error',
              timer: 1500,
              showConfirmButton: false
            })
          }
        }).catch(err => {
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
    setForm() {
      Object.keys(this.form).forEach(key => {
        this.form[key] = this.item[key]
      })
      this.getDistricts()
      this.kodpAction({ search: 'test', key: this.form.kodp_key })
    },
    ...mapActions({ kodpAction: 'resources/positions', getDistrictsAction: 'region/districts', store: 'experience/store', show: 'experience/show', update: 'experience/update' })
  }
}
</script>

<style>

</style>
