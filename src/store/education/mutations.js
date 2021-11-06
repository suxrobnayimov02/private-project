export const mutations = {
  SET_EDUCATION: (state, education) => {
    state.education = education
  },
  SET_EDUCATIONS: (state, edus) => {
    if (edus && edus.data.length) {     
      state.educations = edus.data
    }
  }
}
