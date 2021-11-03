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
    name: 'ResumeOldCreate',
    path: '/resumes/create-old',
    component: () => import('@/views/resume/components/index')
  },
  {
    name: 'ResumeShow',
    path: '/resumes/:id',
    component: () => import('@/views/resume/show')
  }
]

export default resumeRouter
