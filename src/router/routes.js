
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'video', component: () => import('layouts/video.vue') },
      { path: 'contact', component: () => import('layouts/contact.vue') },
      { path: 'krabi_hotel', component: () => import('layouts/hotel/krabi_hotel.vue') },
      { path: 'phangnga_hotel', component: () => import('layouts/hotel/phangnga_hotel.vue') },
      { path: 'phuket_hotel', component: () => import('layouts/hotel/phuket_hotel.vue') },
      { path: 'trang_hotel', component: () => import('layouts/hotel/trang_hotel.vue') },
      { path: 'krabi_tour', component: () => import('layouts/tour/krabi_tour.vue') },
      { path: 'phangnga_tour', component: () => import('layouts/tour/phangnga_tour.vue') },
      { path: 'phuket_tour', component: () => import('layouts/tour/phuket_tour.vue') },
      { path: 'trang_tour', component: () => import('layouts/tour/trang_tour.vue') }
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
