const resumeRouter = [
  {
    name: 'ResumeHandbook',
    path: '/resumes/handbook',
    component: () => import('@/views/resume/handbook')
  },
  {
    name: 'ResumeCreate',
    path: '/resumes/create',
    component: () => import('@/views/resume/create')
  },
  {
    name: 'EducationCreate',
    path: '/resumes/education-create',
    component: () => import('@/views/resume/components/Education/create')
  },
  {
    name: 'ResumeShow',
    path: '/resumes/:id',
    component: () => import('@/views/resume/show')
  }
]

export default resumeRouter
