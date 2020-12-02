<template>
  <q-dialog v-model="isShow" persistent>
    <q-card>
      <div class="text-h6 p-15">{{ $t('pages.account.photos.albums.create') }}</div>
      <q-card-section class="row items-center">
        <form @submit.prevent="save" class="width-form-4">
          <div class="row">
            <div class="col-12">
              <q-input
                v-model="data.name"
                :label="$t('pages.account.photos.albums.form.name')"
                :hint="$t('pages.account.photos.albums.form.name_hint')"
                class="full-width"
              />
            </div>
            <div class="col-12">
              <q-select
                v-model="data.is_private"
                :options="boolOptions"
                :label="$t('pages.account.photos.albums.form.is_private')"
                :hint="$t('pages.account.photos.albums.form.is_private_hint')"
                emit-value
                map-options
                option-value="value"
                option-label="text"
              />
            </div>
            <div class="col-12 mt-1">
              <q-select
                v-model="data.is_visibility"
                :options="boolOptions"
                :label="$t('pages.account.photos.albums.form.is_visibility')"
                :hint="$t('pages.account.photos.albums.form.is_visibility_hint')"
                emit-value
                map-options
                option-value="value"
                option-label="text"
              />
            </div>
          </div>
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
  </q-dialog>
</template>

<script>
export default {
  name: "Create",
  data() {
    return {
      title: this.$t('pages.account.photos.albums.create'),
      data: {},
      isShow: false,
      boolOptions: [
        {value: 1, text: this.$t('globals.yes')},
        {value: 0, text: this.$t('globals.no')}
      ]
    }
  },
  methods: {
    save() {
      this.$axios.post('user/albums/create', this.data)
        .then((data) => {
          if (data.data.success === 1) {
            this.$emit('success');
            this.isShow = false;
            this.$q.notify({
              message: data.data.msg
            })
          }
        })
        .catch((error) => {
          //
        })
    },
    openModal() {
      this.isShow = true;
    }
  }
}
</script>

<style scoped>

</style>
