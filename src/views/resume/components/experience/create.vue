<template>
  <div>
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
      {{ form }}
    </el-dialog>
    <el-button type="primary" icon="el-icon-plus" @click="dialogVisible = true">{{ $t('Ish tajribasi qo\'shish') }}</el-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ExperienceCreate',
  data() {
    return {
      dialogVisible: false,
      form: {
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
        position_description: [{ required: true, message: 'To\'ldirish joiz bo\'lgan maydonl', trigger: 'change' }],
      }
    }
  },
  computed: {
    ...mapGetters({ positions: 'resources/GET_POSITIONS', regions: 'region/GET_REGIONS', districts: 'region/GET_DISTRICTS' }),
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
    save() {

    },
    ...mapActions({ kodpAction: 'resources/positions', getDistrictsAction: 'region/districts' })
  }
}
</script>

<style>

</style>
