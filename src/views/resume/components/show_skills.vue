<template>
  <div>
    <el-row v-for="(skill, index) in skills" :key="'skill' + index" :class="index != 0 ? 'mt5' : ''">
      <el-col><b class="text-muted">{{ $t(skill.name) }}:</b></el-col>
      <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
        <div v-if="skill.id == 1">
          <template v-if="user_languages && user_languages.length != 0">
            <div v-for="lang in user_languages" :key="lang.id" class="lang">
              <el-row>
                <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
                  <el-input v-model="lang.skill.name" class="w-100" disabled />
                </el-col>
                <el-col :xs="24" :sm="24" :md="9" :lg="9" :xl="9">
                  <el-input v-model="lang.skill_level.name" disabled :placeholder="$t('Bilish darajasi')" />
                </el-col>
              </el-row>
            </div>
          </template>
          <span v-else class="mr-2">{{ $t('Нет') }}</span>
        </div>
        <div v-if="skill.id == 2">
          <template v-if="user_computer_skills && user_computer_skills.length">
            <div v-for="lang in user_computer_skills" :key="lang.id" class="lang">
              <el-row>
                <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
                  <el-input v-model="lang.skill.name" class="w-100" disabled />
                </el-col>
                <el-col :xs="24" :sm="24" :md="9" :lg="9" :xl="9">
                  <el-input v-model="lang.skill_level.name" disabled :placeholder="$t('Билиш даражаси')" />
                </el-col>
              </el-row>
            </div>
          </template>
          <template v-else>
            <span class=" mr-2">{{ $t('Нет') }}</span>
          </template>
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
      languages: [],
      levels: [],
      skills: [],
      add_skill_id: null,
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
      user_languages: 'resources/GET_USER_LANGUAGES',
      user_computer_skills: 'resources/GET_USER_COMPUTER_SKILLS',
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
    this.userSkills()
  },
  methods: {
    ...mapActions({
      getUserSkills: 'resources/get_seeker_skills',
      deleteLanguage: 'resources/delete_seeker_skills',
      storeLanguage: 'resources/store_seeker_skills'
    }),
    userSkills() {
      if (this.user && this.user.id) {
        this.getUserSkills({ user_id: this.user.id })
      }
    },
    validate() {
      return !!((this.form.skill_id !== null && this.form.skill_level_id !== null))
    },
    addSkillForm(skill) {
      if (this.dialogVisible) {
        this.addSkill()
      }
      this.dialogVisible = true
      this.add_skill_id = skill.id
      this.form.skill_id = null
      this.form.skill_level_id = null
    },
    addSkill() {
      if (this.validate()) {
        let v = false
        if (this.form.skill_id && this.form.skill_level_id) {
          v = true        
        }
        if (v) {
          this.storeLanguage(this.form)
            .then(result => {
              this.reset()
              this.userSkills()
            })
            .catch(err => {
              if (err) {
                console.log(err)
                this.$notify({
                  title: this.$t('Xatolik'),
                  message: 'Sizda bu parametr bo\'yicha mal\'umot bor',
                  type: 'error'
                })
              }
            })
        }
      } else {
        this.$notify({
          title: this.$t('Xatolik'),
          message: this.$t('Maydonlarni to\'ldiring'),
          type: 'error'
        })
      }
    },
    deleteItem(id) {
      this.$msgbox({ message: 'Ishonchingiz komilmi?', title: 'O\'chirish', showCancelButton: true, confirmButtonText: 'O\'chirish' }).then(() => {
        this.deleteLanguage(id).finally(() => {
          this.userSkills()
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
     margin-top: 5px;
    margin-left: 10px;
}
.ml200 {
  margin-left: 206px;
}
.w-100 {
  width: 100%;
}
.ml5l {
  margin-top: 5px;
  margin-left: 30px;
}
.mt5 {
  margin-top: 15px;
}
.frcontent {
  float: right;
}
</style>
