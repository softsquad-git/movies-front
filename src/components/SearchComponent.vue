<template>
<q-form @submit.prevent="search" class="search-form">
  <div class="row">
    <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <q-input type="text" v-model="data.title" :placeholder="$t('search.title')"/>
    </div>
    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12">
      <q-select
        v-model="data.category"
        :options="categories"
        :label="$t('search.category')"
        emit-value
        map-options
        option-value="id"
        option-label="name"
      />
    </div>
    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12">
      <q-select
        v-model="data.ordering"
        :options="ordering"
        :label="$t('search.ordering.title')"
        emit-value
        map-options
        option-value="value"
        option-label="txt"
      />
    </div>
    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12">
      <q-select
        v-model="data.pagination"
        :options="pagination"
        :label="$t('search.pagination')"
      />
    </div>
    <div class="ocl-xl-1 col-lg-1 col-md-1 col-sm-12 col-xs-12">
      <q-btn type="submit" style="padding: 11px" icon="search" class="full-width" flat padding="5px"/>
    </div>
  </div>
</q-form>
</template>

<script>
export default {
  name: "SearchComponent",
  data() {
    return {
      data: {
        title: '',
        category: '',
        ordering: '',
        pagination: '',
      },
      categories: [],
      ordering: [
        {value: 'ASC', txt: this.$t('search.ordering.asc')},
        {value: 'DESC', txt: this.$t('search.ordering.desc')}
      ],
      pagination: [
        6, 12, 18
      ]
    }
  },
  methods: {
    search() {
      this.$emit('search')
    }
  },
  created() {
    this.$axios.get('categories/all')
    .then((data) => {
      this.categories = data.data.data;
    })
  }
}
</script>

<style scoped>

</style>
