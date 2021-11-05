<template>
  <div>
    <el-row v-for="(skill, index) in skills" :key="'skill' + index">
      <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6"><b class="text-muted">{{ $t(skill.name) }}:</b></el-col>
      <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
        <template v-if="citizen_languages && citizen_languages.length != 0">
          <div v-for="lang in citizen_languages" :key="lang.id" class="lang">
            <el-row v-if="lang.skill && lang.skill.category_id == 1">
              <el-col :span="7">
                <p class="text-success font-weight-bold">{{ (locale == 'ru')?lang.skill.name:(locale == 'uzln')?lang.skill.name:lang.skill.name }}</p>
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
      <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
        <div class="float-right ml-5">
          <el-button type="primary" size="mini" icon="el-icon-plus" @click="dialogVisible = true">{{ $t('Добавить язык') }}</el-button>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="4">
        <div v-if="dialogVisible">
          <span class="primaryTitle">{{ $t('Добавить язык') }}</span>
          <el-form
            ref="form"
            :model="form"
            :rules="rules"
            label-position="top"
            class="top-label-custom pb-5"
          >
            <el-row>
              <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
                <el-form-item :label="$t('Тилни танланг')" prop="skill_level_id">
                  <el-select v-model="form.skill_id" class="w-100" :filterable="true">
                    <el-option
                      v-for="language in languages"
                      :key="language.id"
                      :label="language.name"
                      :value="language.id"
                    />
                  </el-select>
                  <el-select v-model="form.skill_level_id" class="w-50" :placeholder="$t('Билиш даражаси')" :filterable="true">
                    <el-option
                      v-for="language in levels"
                      :key="language.id"
                      :label="language.name"
                      :value="language.id"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                <el-button class="float-right mr-2 mtb" type="primary" size="mini" icon="el-icon-plus" @click="addLang" />
                <el-button class="float-left mtb" type="danger" size="mini" icon="el-icon-delete" @click="reset" />
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-col>
    </el-row>
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
      citizen_languages: [],
      languages: [],
      levels: [],
      skills: [],
      form: {
        user_id: null,
        skill_id: null,
        skill_level_id: null
      },
      rules: {
        store_seeker_skills: [
          { required: true, message: this.$t('Заполните это поле'), trigger: 'change' }
        ],
        skill_id: [
          { required: true, message: this.$t('Заполните это поле'), trigger: 'change' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters({
      skillCategories: 'resources/GET_SKILL_CATEGORIES',
      skillLevels: 'resources/GET_SKILL_LEVELS',
      user: 'auth/USER',
      all_languages: 'resume/GET_LANGUAGES'
    })
  },
  created() {
    if (this.user && this.user.id) {
      this.form.user_id = this.user.id
    }
    this.skills = this.skillCategories
    this.languages = this.skillCategories[0].skills
    this.levels = this.skillLevels
    if (this.user && this.user.id) {
      this.getUserLanguages({ user_id: this.user.id }).then(res => {
        if (res.success) {
          this.citizen_languages = res.data.data
        }
      })
    }
  },
  methods: {
    ...mapActions({
      getUserLanguages: 'resources/get_seeker_skills',
      getLanguages: 'resume/languages',
      deleteLanguage: 'resume/destroyLanguage',
      storeLanguage: 'resources/store_seeker_skills'
    }),
    validate() {
      return !!((this.form.skill_id !== null && this.form.skill_level_id !== null))
    },
    addLang() {
      if (this.validate()) {
        let v = false
        if (this.form.skill_id && this.form.skill_level_id) {
          v = true        
        }
        if (v) {
          this.storeLanguage(this.form)
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
<style >
.mtb {
  margin-top: 26px;
}
</style>
