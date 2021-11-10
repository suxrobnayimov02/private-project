<template>
  <div v-if="is_auth && user" class="contentBlock clearfix container">
    <div v-if="resume && profile">
      <p class="text-primary" style="cursor:pointer" @click="goToBack">
        Shaxsiy profilga qaytish
      </p>
      <!-- {{ resume }}
      <hr>
      {{ profile }} -->
      <div class="grid-content bg-purple-dark">
        <h2 style="text-align: center; font-weight: bold">{{ $t('Rezyume') }}</h2>
      </div>
      <hr>
      <h3 class="text-gray-700 text-m font-bold text-left text-primary text-center" style="height: 35px">
        {{ profile.first_name + ' ' + profile.last_name }}
      </h3>
      <el-row :gutter="40">
        <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
          <div class="grid-content bg-purple" justify="end" style="text-align: center">
            <img
              src="@/assets/images/businessman.svg"
              alt="image"
              width="150"
            ><br>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18" class="mb-3">
          <el-row class="mt-3">
            <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b class="text-muted">{{ $t('Yoshi') }}:</b></el-col>
            <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b>{{ user.age }}</b></el-col>
          </el-row>
          <el-row class="mt-3">
            <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b class="text-muted">{{ $t('Jinsi') }}:</b></el-col>
            <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
              <span v-if="user.data.gender"><b>{{ $t('Erkak') }}</b></span>
              <span v-else><b>{{ $t('Ayol') }}</b></span>
            </el-col>
          </el-row>
          <el-row class="mt-3">
            <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b class="text-muted">{{ $t('Telefoni') }}:</b></el-col>
            <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b>+{{ user.data.contact_number }}</b></el-col>
          </el-row>
          <el-row class="mt-3">
            <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b class="text-muted">{{ $t('Email') }}:</b></el-col>
            <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b>{{ user.data.email }}</b></el-col>
          </el-row>
          <el-row class="mt-3">
            <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b class="text-muted">{{ $t('Yashash joyi') }}:</b></el-col>
            <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6"><b v-if="profile.region">{{ profile.region.name_uz_ln + ', ' + profile.district.name_uz_ln }}</b></el-col>
          </el-row>
        </el-col>   
      </el-row>
      <br>
      <el-divider content-position="left">
        {{ $t('Istalgan lavozim va oylik maosh') }}
      </el-divider>
      <p>{{ resume.position ? resume.position['name_uz-ln']: '' }}</p>
      <p>{{ resume.nskz_object.name }}</p>
      <p>Ish grafigi: {{ resume.workGraphics.join(', ') }}</p>
      <p>Bandlik turi: {{ resume.busynessTypes.join(', ') }}</p>
      <p>Ko'chish: {{ resume.businessTrips.join(', ') }}</p>
      <p>Oyligi: {{ formatPrice(resume.salary) + ' ' + resume.salary_currency.name }} </p>
      <p>O'zim haqimda: {{ resume.additional_info }} </p>
      <el-divider content-position="left"><i class="el-icon-s-cooperation" /> {{ $t('Mehnat faoliyati') }} </el-divider>
      <el-row class="mt-5">
        <experience-index ref="experienceList" @edit="$refs.experienceCreate.edit($event)" />
      </el-row>
      <el-row>
        <el-divider content-position="left"><img alt="logo" src="@/assets/images/cap.svg" height="25px" class="ml-2 mt-1">
          {{ $t('Ta\'lim ma\'lumotlari') }}</el-divider>
        <div>
          <el-row v-if="education && education.length">
            <EducationTable :education="education" />
          </el-row>
        </div>
      </el-row>
      <!-- LANGUAGES -->
      <el-divider content-position="left">{{ $t('Qo\'shimcha ma\'lumotlar') }}</el-divider>
      <el-row v-if="skillCategories && skillCategories.length" class="mt-1">
        <el-col>
          <languages :profile="user.resume" :locale="locale" />
        </el-col>
      </el-row>
      <el-row class="mt-1">
        <el-col :span="6">
          Haydovchilik guvohnomasi 
        </el-col>
        <el-col :span="12">
          {{ profile.drivers_license }}
        </el-col>
      </el-row>
      <el-row class="mt-1">
        <el-col :span="6">
          Hobbi: 
        </el-col>
        <el-col :span="12">
          {{ profile.hobbies }}
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ExperienceIndex from './components/experience/show'
import EducationTable from './components/Education/show.vue'
import languages from './components/show_skills'

export default {
  components: {
    EducationTable, ExperienceIndex, languages
  },
  data() {
    return {
      loaded: false,
      seeder_salary: null,
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      locale: 'app/LOCALE',
      is_auth: 'auth/GET_IS_AUTH',
      resume: 'resources/GET_WORK_SEEKER',
      education: 'education/GET_EDUCATIONS',
      profile: 'resources/GET_SEEKER_PROFILE',
      skillCategories: 'resources/GET_SKILL_CATEGORIES'
    })
  },
  async mounted() {
    await this.fetchResources().then(() => {
      this.loaded = true
    })
    await this.getInfo()
      .then(() => {
        this.setEducation()
      })
      .catch(() => {
        if (!(this.user && this.user.id)) {
          this.$router.push({ name: 'Register' })
        }
      })
    if (this.$route.params.id) {
      if (!(this.resume && this.resume.position)) {
        this.fetchResume({ user_id: this.user.id, search_by: 'user_id' })
      }
      this.fetchSeekerProfile({ user_id: this.user.id, search_by: 'user_id' })
    }
  },
  methods: {
    ...mapActions({
      getInfo: 'auth/getInfo',
      fetchEdus: 'education/index',
      fetchResources: 'resources/index',
      fetchResume: 'resources/get_work_seeker',
      fetchSeekerProfile: 'resources/get_seeker_profile'
    }),
    calcAge(birth_date) {
      var today = new Date()
      var birthDate = new Date(birth_date)
      var age = today.getFullYear() - birthDate.getFullYear()
      var m = today.getMonth() - birthDate.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      return age
    },
    setEducation() {
      this.fetchEdus({ user_id: this.user.id })
    }

  }
}
</script>
