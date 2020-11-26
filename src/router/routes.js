
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/account',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('pages/account/Index.vue') },
      {
        path: 'movies',
        component: () => import('pages/account/movies/Index'),
        name: 'AccountMovies'
      },
      {
        path: 'movie/:action/:id?',
        component: () => import('pages/account/movies/Form'),
        name: 'AccountMovieForm'
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
