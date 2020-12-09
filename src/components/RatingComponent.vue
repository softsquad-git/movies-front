<template>
  <div>
    <q-btn
      round
      @click="openModal"
      icon="star"
      class="icon">
      <q-badge text-color="white" floating>
        {{ average }}/10
      </q-badge>
      <q-tooltip>
        {{ $t('buttons.rating') }}
      </q-tooltip>
    </q-btn>
    <q-dialog
      v-model="isOpenDialog"
    >
      <q-card style="width: 350px">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ $t('page.rating.create') }}</div>
          <q-space/>
          <q-btn icon="close" flat round dense v-close-popup/>
        </q-card-section>

        <q-card-section class="q-pt-none mt-1">
          <q-rating
            v-model="data.rating"
            size="2em"
            :max="10"
            color="yellow"
            icon="star_border"
            icon-selected="star"
          />
          {{ data.rating }}/10
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn @click="save" icon="save" round/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "RatingComponent",
  data() {
    return {
      data: {
        resource_type: this.resource_type,
        resource_id: this.resource_id,
        rating: ''
      },
      average: 0,
      isOpenDialog: false
    }
  },
  props: {
    resource_id: '',
    resource_type: ''
  },
  methods: {
    save() {
     if (this.$userToken) {
       this.$axios.post('ratings/save', this.data)
         .then((data) => {
           if (data.data.success === 1) {
             this.loadData();
             this.$q.notify({
               message: data.data.msg
             })
           } else if (data.data.success === 1) {
             this.$q.notify({
               message: data.data.msg
             })
           }
           this.isOpenDialog = false;
           this.data.rating = 0;
         })
     }else {
       this.$q.notify({
         message: this.$t('notification.login_please')
       })
     }
    },
    loadData() {
      this.$axios.get(`ratings/find?resource_id=${this.resource_id}&resource_type=${this.resource_type}`)
        .then((data) => {
          this.average = data.data.payload.average
        })
        .catch((error) => {
          //
        })
    },
    openModal() {
      if (this.$userToken) {
        this.isOpenDialog = true;
      } else {
        this.$q.notify({
          message: this.$t('notifications.login_please')
        })
      }
    }
  },
  watch: {
    'resource_id' () {
      this.loadData();
    },
    'resource_type' () {
      this.loadData();
    }
  },
  created() {
    this.loadData()
  }
}
</script>

<style scoped>

</style>
