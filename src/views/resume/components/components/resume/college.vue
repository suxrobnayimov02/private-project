<template>
  <div>
    <el-dialog :title="form.degree == 3 ? $t('Таълим олаётган ОТМни қўшиш') : $t('Добавить среднее специальное образование')" v-model:visible="dialogFormVisible" :close-on-click-modal="false" :before-close="handleClose">
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        label-position="top"
        class="top-label-custom"
      >
        <hr>
        {{ form }}
        <el-row>
          <el-col :span="12">
            <el-form-item label="Ўқув даргоҳи" prop="name">
              <el-input v-model="form.name" class="w-100" placeholder="Ўқув даргоҳи" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Мутахассислик" prop="specialization">
              <el-input v-model="form.specialization" class="w-100" placeholder="Мутахассислик" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="Кирган йили" prop="begin_year">
              <el-select v-model="form.begin_year" filterable>
                <el-option v-for="y in years.slice(1, years.length)" :key="y" :label="y" :value="y" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Битирган йили">
              <el-select v-if="form.status != 1" v-model="form.end_year" filterable>
                <el-option v-for="y in years" :key="y" :label="y" :value="y" />
              </el-select>
              <el-checkbox v-model="form.status" :disabled="form.degree == 3" true-label="1" false-label="0">{{ $t('По настоящее время') }}</el-checkbox>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label=" ">
              <el-checkbox v-model="form.is_work_specialty" true-label="1" false-label="0">{{ $t('Согласен работать по специальности') }}</el-checkbox>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <!--  -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogClose()">{{ $t('Отменит') }}</el-button>
        <el-button type="primary" @click="addCollage()">{{ $t('Сохранить') }}</el-button>
      </span>
    </el-dialog>
    <!-- <el-form
      ref="form"
      :model="form"
      :rules="rules"
      label-position="top"
      class="top-label-custom"
    >
      <el-row>
        <el-col :span="18">
          <el-form-item label="Ўқув даргоҳи">
            <el-input v-model="form.name" class="w-100" placeholder="Ўқув даргоҳи" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Мутахассислик" prop="specialization">
            <el-input v-model="form.specialization" class="w-100" placeholder="Мутахассислик" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="Кирган йили" prop="begin_year">
            <el-select v-model="form.begin_year">
              <el-option v-for="y in years.slice(1, years.length)" :key="y" :label="y" :value="y" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Битирган йили">
            <el-select v-if="form.status !== 1" v-model="form.end_year">
              <el-option v-for="y in years" :key="y" :label="y" :value="y" />
            </el-select>
            <el-checkbox v-model="form.status" :label="1">По настоящее время</el-checkbox>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label=" ">
            <el-checkbox v-model="form.is_work_specialty">Согласен работать по специальности</el-checkbox>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form> -->
  </div>
</template>

<script>
export default {
  name: 'Collage',
  props: {
    pin: {
      type: String,
      default () {
        return ''
      }
    },
    degree: {
      type: Number,
      default () {
        return null
      }
    }
  },
  data () {
    return {
      // form: this.education[0],
      dialogFormVisible: true,
      form: {
        pin: null,
        degree: null,
        name: null,
        specialization: null,
        begin_year: null,
        end_year: null,
        status: null,
        is_work_specialty: null
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Тўлдирилиши жоиз бўлган майдон',
            trigger: 'change'
          }
        ],
        specialization: [
          {
            required: true,
            message: 'Тўлдирилиши жоиз бўлган майдон',
            trigger: 'change'
          }
        ],
        begin_year: [
          {
            required: true,
            message: 'Тўлдирилиши жоиз бўлган майдон',
            trigger: 'change'
          }
        ]
      }
    }
  },
  computed: {
    currentYear () {
      return String(new Date().getFullYear())
    },
    years () {
      const arr = []
      for (let i = this.currentYear; i > 1949; i--) {
        arr.push(i)
      }
      return arr
    }
  },
  watch: {
    'form.status' (newVal, oldVal) {
      if (newVal == 1) {
        this.form.end_year = null
      }
    },
    'form.degree' (newVal, oldVal) {
      if (newVal === 3) {
        this.form.status = '1'
      } else {
        this.form.status = 0
      }
    }
  },
  mounted () {
    this.form.pin = this.pin
    this.form.degree = this.degree
  },
  methods: {
    validate () {
      let validated = false
      this.$refs.form.validate((valid) => {
        validated = valid
      })
      return validated
    },
    addCollage () {
      if (this.validate()) {
        this.$emit('collage', this.form)
        this.dialogFormVisible = false
      } else {
        this.$message({
          message: this.$t('Жоиз майдонлар тўлдирилиши шарт!'),
          type: 'error',
          duration: 3 * 1000,
          offset: 80
        })
      }
    },
    dialogClose () {
      this.$emit('collage', false)
      this.dialogFormVisible = false
    },
    handleClose (done) {
      this.$confirm(this.$t('Ишончингиз комилми?'))
        .then(_ => {
          done()
          this.$emit('collage', false)
        })
        .catch(_ => {})
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
