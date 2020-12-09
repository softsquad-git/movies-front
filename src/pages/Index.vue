<template>
  <div class="home-page">
    <div class="top-banner">
      <div class="bg-dark-transparent flex flex-center">
        <div class="search-top-bar-box">
          <div class="row">
            <div class="col-xl-10 col-lg-10 col-md-10 col-sm-9 col-xs-9">
              <q-input v-model="search.title" :placeholder="$t('search.movie_title')"/>
            </div>
          </div>
        </div>
        <div class="__footer">
          <router-link :to="{name: 'FrontMovies'}">{{ $t('nav.front.terms') }}</router-link>
          <router-link :to="{name: 'FrontMovies'}">{{ $t('nav.front.pp') }}</router-link>
          <router-link :to="{name: 'FrontMovies'}">{{ $t('nav.front.contact') }}</router-link>
          <router-link :to="{name: 'FrontMovies'}">{{ $t('nav.front.help') }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      search: {
        title: ''
      }
    }
  }
}
</script>

<style scoped lang="sass">
.home-page
  .top-banner
    background: url("../assets/top-banner.jpg")
    position: fixed
    height: 100vh
    min-width: 100%
    min-height: 100%
    background-size: cover

    .search-top-bar-box
      background: #ffffffcc
      padding: 15px
      border-radius: 4px
      width: 80%
    .__footer
      position: absolute
      bottom: 100px
      width: 100%
      text-align: center
      a
        color: #f7f7f7
        padding: 10px
</style>
