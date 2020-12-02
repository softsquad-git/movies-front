<template>
  <div class="admin-page">
    <div class="header">
      <div class="row">
        <div class="col-9">
          <h3>{{ title }}</h3>
        </div>
        <div class="col-3">
          <q-btn @click="onCreate" round outline color="positive"
                 class="float-right" icon="add">
            <q-tooltip>
              {{ $t('tooltips.create') }}
            </q-tooltip>
          </q-btn>
          <q-btn v-if="selected.length > 0" @click="onRemove" round outline color="negative"
                 class="float-right mr-1" icon="delete">
            <q-tooltip>
              {{ $t('tooltips.delete') }}
            </q-tooltip>
          </q-btn>
        </div>
      </div>
    </div>
    <viewer v-if="data.data.length > 0" :images="data.data">
      <div class="row" style="padding: 0 10px;">
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 p-5" v-for="photo in data.data" :key="photo.src">
          <q-card class="my-card height">
            <q-item>
              <q-item-section avatar>
                <q-checkbox v-model="selected" :val="photo.id"/>
              </q-item-section>
              <q-item-section>
                <q-item-label caption>{{ photo.created_at }}</q-item-label>
              </q-item-section>
            </q-item>
            <img class="cursor" :src="photo.src" :alt="photo.src"/>
          </q-card>
        </div>
      </div>
    </viewer>
    <no-data-items v-if="data.data.length < 1" :msg="$t('notifications.no_data')"/>

    <create ref="createComponent" @success="loadData"/>
  </div>
</template>

<script>
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import Vue from 'vue'
import NoDataItems from "components/NoDataItems";

Vue.use(Viewer)
export default {
  name: "Index",
  components: {
    NoDataItems,
    Create: () => import('pages/account/photos/partials/Create')
  },
  data() {
    return {
      data: {},
      params: {},
      title: this.$t('pages.account.photos.title'),
      selected: []
    }
  },
  methods: {
    loadData(page = 1) {
      this.$axios.get(`user/albums/photos/all?page=${page}&album_id=${this.$route.params.album_id}`)
        .then((data) => {
          this.data = data.data;
        })
        .catch((error) => {
          //
        })
    },
    onCreate() {
      this.$refs.createComponent.openModal(null)
    },
    onRemove() {
      this.$axios.delete(`user/albums/photos/remove?ids=${JSON.stringify(this.selected)}`)
      .then((data) => {
        if (data.data.success) {
          this.loadData();
          this.$q.notify({
            message: data.data.msg
          })
          this.selected = [];
        }
      })
      .catch((error) => {
        this.selected = [];
        //
      })
    }
  },
  created() {
    this.loadData();
    document.title = this.title;
  }
}
</script>

<style scoped>

</style>
