
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'), name: 'IndexPage' },
      {
        path: 'auth/:action',
        component: () => import('pages/auth/Index'),
        name: 'Auth'
      }
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
        component: () => import('pages/account/movies/Item'),
        name: 'AccountMovieItem'
      },
      {
        path: 'stories',
        component: () => import('pages/account/stories/Index'),
        name: 'AccountStories'
      },
      {
        path: 'story/:action/:id?',
        component: () => import('pages/account/stories/Item'),
        name: 'AccountStoryItem'
      },
      {
        path: 'albums',
        component: () => import('pages/account/photos/albums/Index'),
        name: 'AccountAlbums'
      },
      {
        path: 'album/:album_id/photos',
        component: () => import('pages/account/photos/Index'),
        name: 'AccountAlbumPhotos'
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
