<template>
  <q-layout view="lHh Lpr fff" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="GPL__toolbar" style="height: 64px">
        <q-btn
          v-if="$q.screen.lt.md"
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
        <q-btn
          v-if="$q.screen.gt.sm"
          :to="{name: 'IndexPage'}"
          icon="home"
          flat
          round
        />
        <q-btn
          v-if="$q.screen.gt.sm"
          :to="{name: 'FrontMovies'}"
          icon="movie"
          flat
          :label="$t('nav.front.movies')"
          />
        <q-btn
          v-if="$q.screen.gt.sm"
          :to="{name: 'FrontStories'}"
          icon="description"
          flat
          :label="$t('nav.front.stories')"
        />
        <q-btn
          v-if="$q.screen.gt.sm"
          :to="{name: 'FrontPhotos'}"
          icon="photo"
          flat
          :label="$t('nav.front.photos')"
          />
        <q-space />
        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn :to="{name: 'Setting', params: {type: 'avatar'}}" round flat>
            <q-avatar size="26px">
              <img :src="$avatar" :alt="$userName">
            </q-avatar>
            <q-tooltip>{{ $userName }}</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="$q.screen.lt.md"
      v-model="leftDrawerOpen"
      bordered
      behavior="mobile"
      @click="leftDrawerOpen = false"
    >
      <q-scroll-area class="fit">
        <q-toolbar class="GPL__toolbar">
          <q-toolbar-title class="row items-center text-grey-8">
            <img class="q-pl-md" src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg">
          </q-toolbar-title>
        </q-toolbar>

        <q-list padding>
          <q-separator class="q-my-md" />
          <q-item :to="{name: 'FrontPhotos'}" clickable class="GPL__drawer-item">
            <q-item-section avatar>
              <q-icon name="photo" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t('nav.account.photos') }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable class="GPL__drawer-item" :to="{name: 'FrontMovies'}">
            <q-item-section avatar>
              <q-icon name="movie" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t('nav.account.movies') }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable class="GPL__drawer-item" :to="{name: 'FrontStories'}">
            <q-item-section avatar>
              <q-icon name="article" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t('nav.account.stories') }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable class="GPL__drawer-item">
            <q-item-section avatar>
              <q-icon name="videocam" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t('nav.account.cams') }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator class="q-my-md" />

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

    <q-page-container>
        <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      storage: 0.26
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
