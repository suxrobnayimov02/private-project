export const mutations = {
  SET_RESUME_CONFIGS: (state, data) => {
    state.driversLicenses = data.driversLicenses
    state.skillCategories = data.skillCategories
    state.skillLevels = data.skillLevels
    state.educationLevels = data.educationLevels
    state.businessTrips = data.businessTrips
    state.busynessTypes = data.busynessTypes
    state.workGraphics = data.workGraphics
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
  }
}
