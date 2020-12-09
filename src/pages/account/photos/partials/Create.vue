<template>
  <q-dialog v-model="isShow" persistent>
    <q-card>
      <div class="text-h6 p-15">{{ this.title }}</div>
      <q-card-section class="row items-center">
        <form @submit.prevent="save" class="width-form-4">
          <q-select
            v-model="albumId"
            :options="albums"
            :label="$t('pages.account.photos.form.album')"
            :hint="$t('pages.account.photos.form.album_hint')"
            emit-value
            map-options
            option-value="id"
            option-label="name"
          />
          <q-uploader
            class="full-width no-shadow mt-1"
            :multiple="true"
            :factory="save"
            ref="files"
          />
        </form>
      </q-card-section>

      <q-card-actions align="right" class="mt-1">
        <q-btn @click="save" flat icon="save" color="positive" outline round>
          <q-tooltip>
            {{ $t('tooltips.save') }}
          </q-tooltip>
        </q-btn>
        <q-btn flat icon="close" color="negative" round outline v-close-popup>
          <q-tooltip>
            {{ $t('tooltips.cancel') }}
          </q-tooltip>
        </q-btn>
      </q-card-actions>
    </q-card>
    <error-component :errors="errors" ref="onErrorComponent"/>
  </q-dialog>
</template>

<script>
export default {
  name: "Create",
  components: {
    ErrorComponent: () => import('components/ErrorComponent')
  },
  data() {
    return {
      title: this.$t('pages.account.photos.create'),
      data: {
        photos: []
      },
      albumId: null,
      isShow: false,
      albums: [],
      errors: []
    }
  },
  methods: {
    save() {
      this.data.photos = this.$refs.files.files;
      let formData = new FormData();
      for (let i = 0; i < this.data.photos.length; i++) {
        let photo = this.data.photos[i];
        formData.append('photos[' + i + ']', photo, photo.name);
      }
      this.$axios.post(`user/albums/photos/create?album_id=${this.albumId}`, formData)
        .then((data) => {
          if (data.data.success) {
            this.$emit('success');
            this.$q.notify({
              message: data.data.msg
            });
            this.isShow = false;
          }
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
            this.$refs.onErrorComponent.openModal()
          }
        })
    },
    openModal(albumId = null) {
      if (albumId !== null) {
        this.albumId = albumId;
      }
      this.loadAlbums();
    },
    loadAlbums() {
      this.$axios.get(`user/albums/find-all`)
        .then((data) => {
          this.albums = data.data.payload.data;
          this.isShow = true;
          console.log(data.data.payload)
        })
        .catch((error) => {
          //
        })
    }
  }
}
</script>

<style scoped>

</style>
