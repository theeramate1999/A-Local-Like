
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'home', component: () => import('layouts/home.vue') },
      { path: 'video', component: () => import('layouts/video.vue') },
      { path: 'review', component: () => import('layouts/review.vue') },
      { path: 'contact', component: () => import('layouts/contact.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
