<template>
<div class="page">
  <search-component @search="loadData"/>
  <div class="row">
    <div v-if="data.data.length > 0" v-for="item in data.data" class="col-xl-2 col-lg-2 col-md-3 col-sm-12 col-xs-12 p-5">
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
</template>

<script>
import MovieComponent from "components/MovieComponent";
import SearchComponent from "components/SearchComponent";
export default {
  name: "Index",
  components: {SearchComponent, MovieComponent},
  data() {
    return {
      title: '',
      data: {},
      params: {
        title: '',
        category: ''
      }
    }
  },
  methods: {
    loadData(page = 1) {
      this.$axios.get(`front/movies/all?page=${page}&title=${this.params.title}&category=${this.params.category}`)
        .then((data) => {
          this.data = data.data;
        })
        .catch((error) => {
          //
        })
    }
  },
  created() {
    this.loadData();
  }
}
</script>

<style scoped>

</style>
