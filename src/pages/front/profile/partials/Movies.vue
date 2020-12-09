<template>
  <div class="____page">
    <div class="_title">
      {{ $t('page.profile.movies') }}
    </div>
    <div class="_content">
      <div class="row">
        <div v-if="data.data.length > 0" v-for="item in data.data"
             class="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 p-5">
          <q-card class="movie">
            <q-img @click="$router.push({name: 'FrontMovieItem', params: {title: item.title, id: item.id}})"
                   :src="item.thumb" :alt="item.title"/>
            <q-card-section>
              <router-link :to="{name: 'FrontMovieItem', params: {title: item.title, id: item.id}}">
                {{ item.title }}
              </router-link>
              <router-link to="">{{ item.category.name }}</router-link>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movies",
  data() {
    return {
      data: {}
    }
  },
  methods: {
    loadData() {
      this.$axios.get(`front/movies/all?user_id=${this.$route.params.id}&pagination=12`)
        .then((data) => {
          this.data = data.data;
        })
        .catch((error) => {
          //
        })
    }
  },
  created() {
    this.loadData()
  }
}
</script>

<style scoped>

</style>
