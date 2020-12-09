<template>
<div class="page">
  <search-component @search="loadData"/>
  <div v-if="data.data.length" class="row">
    <div v-for="item in data.data" class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-5">
      <div class="story">
        <h4>
          <router-link :to="{name: 'FrontStoryItem', params: {id: item.id}}">
            {{ item.title }}
          </router-link>
        </h4>
        <p v-html="item.short_content"></p>
        <div class="footer">
          {{ item.created_at | moment('calendar') }} <span class="float-right">{{ item.category.name }}</span>
        </div>
      </div>
    </div>
  </div>
  <no-data-items class="mt-1" v-if="data.data.length < 1" :msg="$t('notifications.no_data')"/>
</div>
</template>

<script>
import NoDataItems from "components/NoDataItems";
import SearchComponent from "components/SearchComponent";
export default {
  name: "Index",
  components: {SearchComponent, NoDataItems},
  data() {
    return {
      data: {},
      params: {
        title: '',
        ordering: '',
        pagination: '',
        category: ''
      }
    }
  },
  methods: {
    loadData(page = 1) {
      this.$axios.get(`front/stories/all?page=${page}`)
      .then((data) => {
        this.data = data.data
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
