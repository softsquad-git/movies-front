<template>
  <div class="page">
    <div class="page-movie">
      <div class="row">
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 p-5">
          <div class="_content">
            <movie-component :src="item.src"/>
            <h3 class="title">{{ item.title }}</h3>
            <div class="info">
              <span class="_txt">{{ $t('page.movie.created_by') }}</span>
              <router-link :to="{name: 'FrontUserProfile', params: {name: item.user.name, id: item.user.id}}" class="_link">{{ item.user.name }}</router-link>
              <span class="_txt">{{ $t('page.movie.created_in') }}</span>
              <router-link to="#" class="_link">{{ item.category.name }}</router-link>
              <span class="_txt">{{ item.created_at }}</span>
              <p class="desc" v-html="item.description"/>
            </div>
          </div>
          <rating-component class="like-footer" :resource_type="'MOVIE'" :resource_id="item.id"></rating-component>
          <like-component class="like-footer" :resource_id="item.id" :resource_type="'MOVIE'" :like="item.like.is_like"></like-component>
          <comments-component ref="refCommentComponent" :resource_id="item.id" :resource_type="'MOVIE'"></comments-component>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-5">
          <div class="_sidebar">
            <h3>{{ $t('page.movie.related.title') }}</h3>
            <div class="movies-list">
              <div class="page">
                <div class="row">
                  <div v-if="dataRelatedMovies.length > 0" v-for="item in dataRelatedMovies" class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 p-5">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  components: {
    RatingComponent: () => import('components/RatingComponent'),
    LikeComponent: () => import('components/LikeComponent'),
    CommentsComponent: () => import('components/comments/CommentsComponent'),
    MovieComponent: () => import('components/MovieComponent')
  },
  data() {
    return {
      title: '',
      item: {},
      dataRelatedMovies: []
    }
  },
  methods: {
    findData() {
      this.$axios.get(`front/movies/find/${this.$route.params.id}`)
        .then((data) => {
          this.item = data.data.data;
          this.relatedMovies(data.data.data.category.id)
        })
        .catch((error) => {
          //
        })
    },
    relatedMovies(categoryId) {
      this.$axios.get(`front/movies/all?category=${categoryId}&pagination=6`)
        .then((data) => {
          this.dataRelatedMovies = data.data.data;
        })
        .catch((error) => {
          //
        })
    }
  },
  watch: {
    '$route.params.id' () {
      this.findData();
    },
  },
  created() {
    this.findData();
    console.log(this.$refs.refCommentComponent);
  }
}
</script>

<style scoped>

</style>
