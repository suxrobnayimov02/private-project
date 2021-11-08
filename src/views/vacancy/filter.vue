<template>
  <div class="list__filters filter">
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
            <div class="checkbox ">
              <input
                id="barcha_kasblar"
                type="checkbox"
                checked
                value="option1"
                aria-label="..."
              >
              <label for="barcha_kasblar">
                Ahamiyatsiz
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
                O’rta
              </label>
            </div>
          </td>
          <td>1 752</td>
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
                O’rta maxsus
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
                Oliy
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
  </div>
</template>

<script>
import { VueMaskDirective } from 'v-mask'
import { VMoney } from 'v-money'
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
      manual_salary: ''
    }
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
    }
  },
  methods: {
    sendManual() {
      this.filter.salary = this.manual_salary
    }
  }
}
</script>

<style>

</style>
