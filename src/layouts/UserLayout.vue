<template>
  <q-layout view="lHh Lpr fff" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="GPL__toolbar" style="height: 64px">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          class="q-mx-md"
        />

        <q-toolbar-title v-if="$q.screen.gt.sm" shrink class="row items-center no-wrap">
          <img src="https://cdn.quasar.dev/img/layout-gallery/logo-google.svg">
          <span class="q-ml-sm">Photos</span>
        </q-toolbar-title>

        <q-space />

        <q-input class="GPL__toolbar-input" dense standout="bg-primary" v-model="search" placeholder="Search">
          <template v-slot:prepend>
            <q-icon v-if="search === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
          </template>
        </q-input>

        <q-btn v-if="$q.screen.gt.xs" flat dense no-wrap color="primary" icon="add" no-caps :label="$t('buttons.create')" class="q-ml-sm q-px-md">
          <q-menu anchor="top end" self="top end">
            <q-list class="text-grey-8" style="min-width: 100px">
              <q-item aria-hidden="true">
                <q-item-section class="text-uppercase text-grey-7" style="font-size: 0.7rem">{{ $t('nav.account.create.title') }}</q-item-section>
              </q-item>
              <q-item clickable v-close-popup aria-hidden="true">
                <q-item-section avatar>
                  <q-icon name="movie" />
                </q-item-section>
                <q-item-section>{{ $t('nav.account.create.movie') }}</q-item-section>
              </q-item>
              <q-item clickable v-close-popup aria-hidden="true">
                <q-item-section avatar>
                  <q-icon name="photo" />
                </q-item-section>
                <q-item-section>{{ $t('nav.account.create.photo') }}</q-item-section>
              </q-item>
              <q-item clickable v-close-popup aria-hidden="true">
                <q-item-section avatar>
                  <q-icon name="description" />
                </q-item-section>
                <q-item-section>{{ $t('nav.account.create.story') }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-space />
        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      behavior="mobile"
      @click="leftDrawerOpen = false"
    >
      <q-scroll-area class="fit">
        <q-toolbar class="GPL__toolbar">
          <q-toolbar-title class="row items-center text-grey-8">
            <img class="q-pl-md" src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg">
            <span class="q-ml-sm">Photos</span>
          </q-toolbar-title>
        </q-toolbar>

        <q-list padding>
          <q-item :to="{name: 'AccountAlbums'}" clickable class="GPL__drawer-item">
            <q-item-section avatar>
              <q-icon name="photo" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t('nav.account.photos') }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable class="GPL__drawer-item" :to="{name: 'AccountMovies'}">
            <q-item-section avatar>
              <q-icon name="movie" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t('nav.account.movies') }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable class="GPL__drawer-item">
            <q-item-section avatar>
              <q-icon name="movie" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t('nav.account.cams') }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item clickable class="GPL__drawer-item">
            <q-item-section avatar>
              <q-icon name="archive" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t('nav.account.archive') }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable class="GPL__drawer-item">
            <q-item-section avatar>
              <q-icon name="delete" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t('nav.account.delete') }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item clickable class="GPL__drawer-item">
            <q-item-section avatar>
              <q-icon name="delete" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t('nav.account.payments') }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item clickable class="GPL__drawer-item">
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t('nav.account.settings') }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable class="GPL__drawer-item">
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t('nav.account.help') }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="GPL__page-container">
      <div class="pl-50 pr-50">
        <router-view />
      </div>

      <q-page-sticky v-if="$q.screen.gt.sm" expand position="left">
        <div class="fit q-pt-xl q-px-sm column">
          <q-btn round flat color="grey-8" stack no-caps size="26px" class="GPL__side-btn">
            <q-icon size="22px" name="home" />
            <div class="GPL__side-btn__label">{{ $t('nav.account.left.home') }}</div>
          </q-btn>

          <q-btn :to="{name: 'AccountMovies'}" round flat color="grey-8" stack no-caps size="26px" class="GPL__side-btn">
            <q-icon size="22px" name="movie" />
            <div class="GPL__side-btn__label">{{ $t('nav.account.left.movies') }}</div>
          </q-btn>

          <q-btn :to="{name: 'AccountAlbums'}" round flat color="grey-8" stack no-caps size="26px" class="GPL__side-btn">
            <q-icon size="22px" name="photo" />
            <div class="GPL__side-btn__label">{{ $t('nav.account.left.photos') }}</div>
          </q-btn>

          <q-btn :to="{name: 'AccountStories'}" round flat color="grey-8" stack no-caps size="26px" class="GPL__side-btn">
            <q-icon size="22px" name="article" />
            <div class="GPL__side-btn__label">{{ $t('nav.account.left.stories') }}</div>
          </q-btn>

          <q-btn round flat color="grey-8" stack no-caps size="26px" class="GPL__side-btn">
            <q-icon size="22px" name="settings" />
            <div class="GPL__side-btn__label">{{ $t('nav.account.left.settings') }}</div>
          </q-btn>
        </div>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'UserLayout',
  data () {
    return {
      leftDrawerOpen: false,
      search: '',
      storage: 0.26,
      links1: [
        { icon: 'photo', text: 'Photos' },
        { icon: 'photo_album', text: 'Albums' },
        { icon: 'assistant', text: 'Assistant' },
        { icon: 'people', text: 'Sharing' },
        { icon: 'book', text: 'Photo books' }
      ],
      links2: [
        { icon: 'archive', text: 'Archive' },
        { icon: 'delete', text: 'Trash' }
      ],
      links3: [
        { icon: 'settings', text: 'Settings' },
        { icon: 'help', text: 'Help & Feedback' },
        { icon: 'get_app', text: 'App Downloads' }
      ],
      createMenu: [
        { icon: 'photo_album', text: 'Album' },
        { icon: 'people', text: 'Shared Album' },
        { icon: 'movie', text: 'Movie' },
        { icon: 'library_books', text: 'Animation' },
        { icon: 'dashboard', text: 'Collage' },
        { icon: 'book', text: 'Photo book' }
      ]
    }
  }
}
</script>

<style lang="sass">
.GPL
  &__toolbar
    height: 64px
  &__toolbar-input
    width: 35%
  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px
    .q-item__section--avatar
      padding-left: 12px
      .q-icon
        color: #5f6368
    .q-item__label:not(.q-item__label--caption)
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem
    &--storage
      border-radius: 0
      margin-right: 0
      padding-top: 24px
      padding-bottom: 24px
  &__side-btn
    &__label
      font-size: 12px
      line-height: 24px
      letter-spacing: .01785714em
      font-weight: 500
  @media (min-width: 1024px)
    &__page-container
      padding-left: 94px
</style>
