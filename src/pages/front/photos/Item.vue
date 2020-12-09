<template>
<div class="page">
  <viewer v-if="data.data.length > 0" :images="data.data">
    <div class="row" style="padding: 0 10px;">
      <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 p-5" v-for="photo in data.data" :key="photo.src">
        <q-card class="my-card height">
          <q-item>
            <q-item-section>
              <q-item-label caption>{{ photo.created_at }}</q-item-label>
            </q-item-section>
          </q-item>
          <img class="cursor" :src="photo.src" :alt="photo.src"/>
        </q-card>
      </div>
    </div>
  </viewer>
  <no-data-items class="mt-1" v-if="data.data.length < 1" :msg="$t('notifications.no_data')"/>

</div>
</template>

<script>
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import Vue from 'vue'
Vue.use(Viewer)
import NoDataItems from "components/NoDataItems";
export default {
  name: "Item",
  components: {NoDataItems},
  data() {
    return {
      data: {}
    }
  },
  methods: {
    loadData() {
      this.$axios.get(`front/photos/all/${this.$route.params.album_id}`)
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
