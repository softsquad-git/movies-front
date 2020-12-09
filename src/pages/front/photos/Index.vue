<template>
  <div class="page">
    <div class="row">
      <div v-for="item in data.data" class="col-2 p-5">
        <q-card class="my-card">
          <q-item>
            <q-item-section>
              <q-item-label>{{ item.name }}</q-item-label>
              <q-item-label caption>
                <router-link :to="{name: 'FrontUserProfile', params: {name: item.user.name, id: item.user.id}}">{{ item.user.name }}</router-link>
              </q-item-label>
              <q-item-label caption>{{ item.created_at }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-img @click="onShowPhotos(item.id)" class="cursor" :src="item.img" :alt="item.name">
            <q-tooltip>
              {{ $t('tooltips.show_photos') }}
            </q-tooltip>
          </q-img>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      data: {},
      title: '',
      params: {
        ordering: '',
        pagination: ''
      },
    }
  },
  methods: {
    getData(page = 1) {
      this.$axios.get(`front/photos/albums?page=${page}&ordering=${this.params.ordering}&pagination=${this.params.pagination}`)
        .then((data) => {
          this.data = data.data;
        })
        .catch((error) => {
          //
        })
    },
    onShowPhotos(id) {
      return this.$router.push({name: 'FrontPhotoItem', params: {album_id: id}})
    }
  },
  created() {
    this.getData()
  }
}
</script>

<style scoped>

</style>
