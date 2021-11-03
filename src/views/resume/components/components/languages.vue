<template>
  <div>
    <el-row>
      <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4"><b class="text-muted">{{ $t('Знание языков') }}:</b></el-col>
      <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
        <template v-if="languages && languages.data && languages.data.length != 0">
          <div v-for="lang in languages.data" :key="lang.id" class="lang">
            <el-row>
              <el-col :span="7">
                <p class="text-success font-weight-bold">{{ (locale == 'ru')?lang.language.name_ru:(locale == 'uzln')?lang.language.name_uz_ln:lang.language.name_uz_cl }}</p>
              </el-col>
              <el-col :span="16">
                <el-rate v-model="lang.level" disabled />
              </el-col>
              <el-col :span="1">
                <el-button size="mini" type="danger" @click="deleteItem(lang.id)">
                  <i class="el-icon-delete-solid" />
                </el-button>
              </el-col>
            </el-row>
          </div>
        </template>
        <span v-else class="label label-red mr-2">{{ $t('Нет') }}</span>
      </el-col>
      <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
        <div class="float-right mr-5">
          <el-button type="primary" size="mini" icon="el-icon-plus" @click="dialogVisible = true">{{ $t('Добавить язык') }}</el-button>
        </div>
      </el-col>
    </el-row>

    <el-dialog
      v-model="dialogVisible"
      :before-close="reset"
      width="20%"
    >
      <template #title>
        <span class="primaryTitle">{{ $t('Добавить язык') }}</span>
      </template>
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        label-position="top"
        class="top-label-custom pb-5"
      >
        <el-form-item :label="$t('Тилни танланг')" prop="language_code">
          <el-select v-model="form.language_code" class="w-100" :filterable="true">
            <el-option
              v-for="language in all_languages.data"
              :key="language.code"
              :label="language.name_uz_cl"
              :value="language.code"
            />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('Билиш даражаси')" prop="level">
          <el-rate v-model="form.level" />
        </el-form-item>
        <el-button class="float-right mr-2" type="primary" @click="addLang">{{ $t('Добавить') }}</el-button>
        <el-button class="float-left" @click="reset">{{ $t('Отменить') }}</el-button>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: {
    profile: {
      type: Object,
      required: true
    },
    locale: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      loaded: false,
      dialogVisible: false,
      form: {
        language_code: null,
        level: null
      },
      rules: {
        language_code: [
          { required: true, message: this.$t('Заполните это поле'), trigger: 'change' }
        ],
        level: [
          { required: true, message: this.$t('Заполните это поле'), trigger: 'change' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters({
      languages: 'resume/GET_USER_LANGUAGES',
      all_languages: 'resume/GET_LANGUAGES'
    })
  },
  created() {
    if (this.profile && this.profile.pin) {
      this.getUserLanguages({ person_pin: this.profile.pin })
    }
    this.getLanguages()
  },
  methods: {
    ...mapActions({
      getUserLanguages: 'resume/userLanguages',
      getLanguages: 'resume/languages',
      deleteLanguage: 'resume/destroyLanguage',
      storeLanguage: 'resume/createLanguage'
    }),
    validate() {
      return !!((this.form.language_code !== null && this.form.level !== 0))
    },
    addLang() {
      if (this.validate()) {
        let v = false
        this.$refs.form.validate((valid) => {
          v = valid
        })
        if (v) {
          const params = {
            language_code: this.form.language_code,
            level: this.form.level * 2,
            person_pin: this.profile.pin,
            person_tin: this.profile.tin
          }
          this.storeLanguage(params)
            .then(result => {
              this.reset()
              this.getUserLanguages({ person_pin: this.profile.pin })
            })
        }
      } else {
        this.$notify({
          title: this.$t('Ошибка'),
          message: this.$t('Заполните все поля'),
          type: 'error'
        })
      }
    },
    deleteItem(id) {
      this.$msgbox({ message: 'Ишончингиз комилми?', title: 'Ўчириш', showCancelButton: true, confirmButtonText: 'Ўчириш' }).then(() => {
        this.deleteLanguage(id).finally(() => {
          this.getUserLanguages({ person_pin: this.profile.pin })
        })
      })
    },
    reset() {
      this.$refs.form.resetFields()
      this.dialogVisible = false
    }
  }

}
</script>
