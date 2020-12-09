<template>
<div class="row">
  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <movie-component :src="item.src"/>
  </div>
  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <div class="q-table__middle">
      <table class="q-table">
        <thead>
        </thead>
        <tbody>
        <tr>
          <td>{{ $t('pages.account.movies.table.title') }}</td>
          <td>{{ item.title }}</td>
        </tr>
        <tr>
          <td>{{ $t('pages.account.movies.table.category') }}</td>
          <td>{{ item.category.name }}</td>
        </tr>
        <tr>
          <td>{{ $t('pages.account.movies.table.created_at') }}</td>
          <td>{{ item.created_at }}</td>
        </tr>
        <tr v-if="item.description">
          <td>{{ $t('pages.account.movies.table.description') }}</td>
          <td>{{ item.description }}</td>
        </tr>
        <tr>
          <td>{{ $t('pages.account.movies.table.c_downloads') }}</td>
          <td>00</td>
        </tr>
        <tr>
          <td>{{ $t('pages.account.movies.table.comments') }}</td>
          <td>00</td>
        </tr>
        <tr>
          <td>{{ $t('pages.account.movies.table.ratings') }}</td>
          <td>00</td>
        </tr>
        <tr>
          <td>{{ $t('pages.account.movies.table.likes') }}</td>
          <td><q-icon name="arrow_drop_up"/>00 <q-icon name="arrow_drop_down"/>00</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import MovieComponent from "components/MovieComponent";
export default {
  name: "Find",
  components: {MovieComponent},
  data() {
    return {
      item: {}
    }
  },
  methods: {
    loadData() {
      this.$axios.get(`user/movies/find/${this.$route.params.id}`)
      .then((data) => {
        this.item = data.data.data;
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
