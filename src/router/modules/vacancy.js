const vacancyRouter = [
  {
    name: 'VacancyIndex',
    path: '/vacancies',
    component: () => import('@/views/vacancy/index')
  },
  {
    name: 'VacancyShow',
    path: '/vacancies/:id',
    component: () => import('@/views/vacancy/show')
  }
]

export default vacancyRouter
