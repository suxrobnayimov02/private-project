export const mutations = {
  SET_RESUME_CONFIGS: (state, data) => {
    state.driversLicenses = data.driversLicenses
    state.skillCategories = data.skillCategories
    state.skillLevels = data.skillLevels
    state.educationLevels = data.educationLevels
    state.businessTrips = data.businessTrips
    state.busynessTypes = data.busynessTypes
    state.workGraphics = data.workGraphics
    state.salaryCurrencies = data.salaryCurrencies
  },
  SET_POSITIONS: (state, positions) => {
    state.positions = positions
  },
  SET_SKILLS: (state, seeker_skills) => {
    if (seeker_skills && seeker_skills.data.length) {
      const langs = []
      const comp_skills = []
      seeker_skills.data.forEach(skill => {
        if (skill.skill.category_id == 1) {
          langs.push(skill)
        } else if (skill.skill.category_id == 2) {
          comp_skills.push(skill)
        }
      })
      state.user_languages = langs
      state.user_computer_skills = comp_skills
    }
  },
  SET_WORK_SEEKER: (state, work_seeker) => {
    state.work_seeker = work_seeker
  },
  SET_WORK_SEEKERS: (state, work_seekers) => {
    state.work_seekers = work_seekers
  },
  SET_SEEKER_PROFILE: (state, profile) => {
    state.seeker_profile = profile
  },
  SET_FILTERABLE_NSKZ: (state, data) => {
    state.filterable_nskz = data
  }
}
