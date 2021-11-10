<template>
  <div class="list__filters filter">

    <div class="filter__item">
      <div class="filter__title">Hudud</div>
      <el-select v-model="company_soato_code4" class="w-100 mb-3" clearable>
        <el-option v-for="item in regions" :key="item.soato" :label="item['name_uz_ln']" :value="item.soato" />
      </el-select>
      <el-select v-if="company_soato_code4" v-model="company_soato_code7" class="w-100" clearable>
        <el-option v-for="item in districts" :key="item.soato" :label="item['name_uz_ln']" :value="item.soato" />
      </el-select>
      <br>
    </div>
    <div class="filter__item">
      <div class="filter__title">Sohalar</div>
      <el-select v-model="filter.nskz" class="w-100 mb-3" clearable>
        <el-option v-for="item in filterable_nskz" :key="item.code" :label="item['name_uz_ln']" :value="item.code" />
      </el-select>
      <br>
    </div>
    <div class="filter__item">
      <div class="filter__title">Kasblar</div>
      <table>
        <tr>
          <td>
            <div class="checkbox ">
              <input
                id="barcha_kasblar"
                type="checkbox"
                value="option1"
                aria-label="..."
              >
              <label for="barcha_kasblar">
                Barcha kasblar
              </label>
            </div>
          </td>
          <td>53 897 </td>
        </tr>
        <tr>
          <td>
            <div class="checkbox ">
              <input
                id="Oqituvchi"
                type="checkbox"
                value="option1"
                aria-label="..."
              >
              <label for="Oqituvchi">
                O’qituvchi
              </label>
            </div>
          </td>
          <td>18 752</td>
        </tr>
        <tr>
          <td>
            <div class="checkbox ">
              <input
                id="barcha_kasblar"
                type="checkbox"
                value="option1"
                aria-label="..."
              >
              <label for="barcha_kasblar">
                Repetitor
              </label>
            </div>
          </td>
          <td> 963</td>
        </tr>
        <tr>
          <td>
            <div class="checkbox ">
              <input
                id="barcha_kasblar"
                type="checkbox"
                value="option1"
                aria-label="..."
              >
              <label for="barcha_kasblar">
                Barcha kasblar
              </label>
            </div>
          </td>
          <td>53 897</td>
        </tr>
        <tfoot>
          <tr>
            <td>
              <button class="btn-link">
                Barchasini ko’rsatish
              </button>
            </td>
          </tr>
        </tfoot>
      </table>

    </div>
    <div class="filter__item">
      <div class="filter__title">Maosh, so’mda</div>
      <table>
        <tr>
          <td>
            <el-radio v-model="salary" :label="null">Ahamiyatsiz</el-radio>
          </td>
          <td>23 005</td>
        </tr>
        <tr>
          <td>
            <el-radio v-model="salary" :label="1000000">1 000 000 dan</el-radio>
          </td>
          <td>23 005</td>
        </tr>
        <tr>
          <td>
            <el-radio v-model="salary" :label="2000000">2 000 000 dan</el-radio>
          </td>
          <td>35 842</td>
        </tr>
        <tr>
          <td>
            <el-radio v-model="salary" :label="3000000">3 000 000 dan</el-radio>
          </td>
          <td> 9 752</td>
        </tr>
        <tr>
          <td>
            <el-radio v-model="salary" label="manual">O'zingiz belgilang</el-radio>
          </td>
        </tr>
        <tfoot v-if="salary === 'manual'">
          <tr>
            <td class="with-input">
              <div class="form-group position-relative">
                <input ref="input" v-model="manual_salary" v-money="money" @keyup.enter="sendManual">
                <span class="input-postfix">dan</span>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>

    </div>
    <div class="filter__item">
      <div class="filter__title">Ta’lim darajasi</div>
      <table>
        <tr>
          <td>
            <el-radio v-model="filter.min_education" :label="null">Ahamiyatsiz</el-radio>
          </td>
          <td>23 005</td>
        </tr>
        <tr>
          <td>
            <el-radio v-model="filter.min_education" label="ССПО">O’rta maxsus</el-radio>
          </td>
          <td>35 842</td>
        </tr>
        <tr>
          <td>
            <el-radio v-model="filter.min_education" label="ССПО, В/О">O’rta maxsus yoki oliy</el-radio>
          </td>
          <td> 9 752</td>
        </tr>
        <tr>
          <td>
            <el-radio v-model="filter.min_education" label="В/О">Oliy</el-radio>
          </td>
        </tr>
        <tfoot>
          <tr>
            <td>
              <button class="btn-link">
                Barchasini ko’rsatish
              </button>
            </td>
          </tr>
        </tfoot>
      </table>

    </div>
  </div>
</template>

<script>
import { VueMaskDirective } from 'v-mask'
import { VMoney } from 'v-money'
import { mapActions, mapGetters } from 'vuex'
export default {
  directives: { money: VMoney, mask: VueMaskDirective },
  props: {
    filter: {
      required: true,
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      salary: 0,
      manual_salary: '',
      company_soato_code4: null,
      company_soato_code7: null
    }
  },
  computed: {
    ...mapGetters({ regions: 'region/GET_REGIONS', districts: 'region/GET_DISTRICTS', filterable_nskz: 'resources/GET_FILTERABLE_NSKZ' })
  },
  watch: {
    salary(newVal) {
      if (newVal !== 'manual') {
        this.filter.salary = newVal
        this.manual_salary = ''
      } else {
        setTimeout(() => {
          this.$refs.input.focus()
        }, 10)
      }
    },
    'company_soato_code4'(newVal) {
      this.filter.company_soato_code = newVal
      if(newVal) this.getDistricts(newVal)
    },
    'company_soato_code7'(newVal) {
      this.filter.company_soato_code = newVal || this.company_soato_code4
    }
  },
  mounted() {
    this.regionList()
    this.getFilterableNskz()
  },
  methods: {
    sendManual() {
      this.filter.salary = this.manual_salary
    },
    ...mapActions({ regionList: 'region/regions', getDistricts: 'region/districts', getFilterableNskz: 'resources/filterableNskz' })
  }
}
</script>

<style>

</style>
