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
  }
}
