
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
      },
      {
        path: 'movies',
        component: () => import('pages/front/movies/Index'),
        name: 'FrontMovies'
      },
      {
        path: 'movie/:title/:id',
        component: () => import('pages/front/movies/Item'),
        name: 'FrontMovieItem'
      },
      {
        path: 'photos',
        component: () => import('pages/front/photos/Index'),
        name: 'FrontPhotos'
      },
      {
        path: 'photo/:album_id',
        component: () => import('pages/front/photos/Item'),
        name: 'FrontPhotoItem'
      },
      {
        path: 'stories',
        component: () => import('pages/front/stories/Index'),
        name: 'FrontStories'
      },
      {
        path: 'story/:id',
        component: () => import('pages/front/stories/Item'),
        name: 'FrontStoryItem'
      },
      {
        path: 'profile/:name/:id',
        component: () => import('layouts/ProfileLayout'),
        name: 'FrontUserProfile',
        children: [
          {
            path: '',
            component: () => import('pages/front/profile/partials/Info'),
            name: 'UserProfileInfo'
          },
          {
            path: 'movies',
            component: () => import('pages/front/profile/partials/Movies'),
            name: 'UserProfileMovies'
          },
          {
            path: 'photos',
            component: () => import('pages/front/profile/partials/Photos'),
            name: 'UserProfilePhotos'
          }
        ]
      }
    ]
  },
  {
    path: '/account',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('pages/account/Index.vue'), name: 'AccountPage' },
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
      },
      {
        path: 'settings/:type',
        component: () => import('pages/account/settings/Index'),
        name: 'Setting'
      }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
