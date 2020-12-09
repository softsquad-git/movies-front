<template>
  <div class="____page">
    <div class="_title">
      {{ $t('page.profile.photos') }}
    </div>
    <div class="_content">
      <div class="row">
        <div v-for="item in data.data" class="col-3 p-5">
          <q-card class="my-card">
            <q-item>
              <q-item-section>
                <q-item-label>{{ item.name }}</q-item-label>
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
  </div>
</template>

<script>
export default {
  name: "Photos",
  data() {
    return {
      data: {}
    }
  },
  methods: {
    loadData() {
      this.$axios.get(`front/photos/albums?user_id=${this.$route.params.id}&pagination=12`)
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
    this.loadData();
  }
}
</script>

<style scoped>

</style>
