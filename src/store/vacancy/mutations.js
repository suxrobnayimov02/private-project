export const mutations = {
  SET_VACANCY: (state, vacancy) => {
    state.vacancy = vacancy
  },
  SET_VACANCIES: (state, pagination) => {
    state.vacancies.data = pagination.data
    state.vacancies.per_page = pagination.per_page
    state.vacancies.total = pagination.total
    state.vacancies.current_page = pagination.current_page
  }
}
