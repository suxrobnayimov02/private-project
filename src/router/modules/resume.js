const resumeRouter = [
  {
    name: 'ResumeHandbook',
    path: '/resumes/handbook',
    component: () => import('@/views/resume/handbook')
  },
  {
    name: 'ResumeCreate',
    path: '/resume/create',
    component: () => import('@/views/resume/create')
  },
  {
    name: 'ResumeUpdate',
    path: '/resume/:id/update',
    component: () => import('@/views/resume/create')
  },
  {
    name: 'EducationCreate',
    path: '/resumes/education-create',
    component: () => import('@/views/resume/components/Education/create')
  },
  {
    name: 'ResumeStatistics',
    path: '/resume/:id/statistics',
    component: () => import('@/views/resume/statistics')
  },
  {
    name: 'ResumeShow',
    path: '/resume/:id',
    component: () => import('@/views/resume/show')
  }
]

export default resumeRouter
