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
          <q-btn round outline color="primary" class="float-right mr-1" icon="search">
            <q-tooltip>
              {{ $t('tooltips.filters') }}
            </q-tooltip>
          </q-btn>
        </div>
      </div>
    </div>
    <div class="row">
      <div v-for="item in data.data" class="col-2 p-5">
        <q-card class="my-card">
          <q-item>
            <q-item-section avatar>
                <q-fab color="primary" padding="10px" icon="drag_indicator" direction="down">
                  <q-fab-action color="primary" @click="onAddPhotos(item.id)" icon="add">
                    <q-tooltip>
                      {{ $t('tooltips.add_photos') }}
                    </q-tooltip>
                  </q-fab-action>
                  <q-fab-action color="info" @click="onShowPhotos(item.id)" icon="visibility">
                    <q-tooltip>
                      {{ $t('tooltips.show_photos') }}
                    </q-tooltip>
                  </q-fab-action>
                  <q-fab-action color="warning" @click="onEdit(item)" icon="edit">
                    <q-tooltip>
                      {{ $t('tooltips.edit') }}
                    </q-tooltip>
                  </q-fab-action>
                  <q-fab-action color="warning" @click="onArchive(item.id)" icon="archive">
                    <q-tooltip>
                      {{ $t('tooltips.to_archive') }}
                    </q-tooltip>
                  </q-fab-action>
                  <q-fab-action color="negative" @click="onRemove(item.id)" icon="delete_outline">
                    <q-tooltip>
                      {{ $t('tooltips.delete') }}
                    </q-tooltip>
                  </q-fab-action>
                </q-fab>
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ item.name }}</q-item-label>
              <q-item-label caption>{{ item.created_at }}</q-item-label>
              <q-item-label caption>{{ item.status.name }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-img @click="onShowPhotos(item.id)" style="min-height: 165px" class="cursor" :src="item.img" :alt="item.name">
            <q-tooltip>
              {{ $t('tooltips.show_photos') }}
            </q-tooltip>
          </q-img>
        </q-card>
      </div>
    </div>
    <create ref="createComponent" @success="loadData"/>
    <edit ref="editComponent" @success="loadData"/>
    <add-photos ref="addPhotosComponent"/>
  </div>
</template>

<script>
export default {
  name: "Index",
  components: {
    Edit: () => import('pages/account/photos/albums/partials/Edit'),
    Create: () => import('pages/account/photos/albums/partials/Create'),
    AddPhotos: () => import('pages/account/photos/partials/Create')
  },
  data() {
    return {
      title: this.$t('pages.account.photos.albums.title'),
      params: {
        name: '',
        is_private: '',
        is_visibility: ''
      },
      data: {}
    }
  },
  methods: {
    loadData() {
      this.$axios.get(`user/albums/all?name=${this.params.name}&is_private=${this.params.is_private}&is_visibility=${this.params.is_visibility}`)
      .then((data) => {
        this.data = data.data;
      })
      .catch((error) => {})
    },
    onRemove(id) {
      this.$axios.delete(`user/albums/remove?id=${id}`)
        .then((data) => {
          if (data.data.success === 1) {
            this.loadData();
            this.$q.notify({
              message: data.data.msg
            })
          }
        })
        .catch((error) => {
          //
        })
    },
    onArchive(id) {
      this.$axios.post(`user/albums/archive?id=${id}`)
        .then((data) => {
          if (data.data.success === 1) {
            this.loadData();
            this.$q.notify({
              message: data.data.msg
            })
          }
        })
        .catch((error) => {
          //
        })
    },
    onEdit(item) {
      this.$refs.editComponent.openModal(item);
    },
    onCreate() {
      this.$refs.createComponent.openModal();
    },
    onShowPhotos(id) {
      this.$router.push({name: 'AccountAlbumPhotos', params: {album_id: id}})
    },
    onAddPhotos(id) {
      this.$refs.addPhotosComponent.openModal(id);
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
