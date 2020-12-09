<template>
  <div>
    <q-btn
      round
      @click="save(1)"
      :color="is_like == 1 ? 'secondary' : 'gray-1'"
      :text-color="is_like == 1 ? 'white' : 'black'"
      icon="thumb_up"
      class="icon">
      <q-tooltip>
        {{ $t('buttons.like_up') }}
      </q-tooltip>
    </q-btn>
    <q-btn
      round
      @click="save(0)"
      :color="is_like == 0 ? 'negative' : 'grey-1'"
      :text-color="is_like == 0 ? 'white' : 'black'"
      icon="thumb_down"
      class="icon">
      <q-tooltip>
        {{ $t('buttons.like_down') }}
      </q-tooltip>
    </q-btn>
  </div>
</template>

<script>
export default {
  name: "LikeComponent",
  data() {
    return {
      data: {
        resource_id: this.resource_id,
        resource_type: this.resource_type,
        like: ''
      },
      is_like: this.like
    }
  },
  props: {
    resource_id: '',
    resource_type: '',
    like: ''
  },
  methods: {
    save(like) {
      this.data.like = like
      this.$axios.post('likes/like', this.data)
        .then((data) => {
          if (data.data.success === 1) {
            if (data.data.payload.like !== null) {
              this.is_like = data.data.payload.like;
            } else {
              this.is_like = '';
            }
            this.$q.notify({
              message: data.data.msg
            })
          }
        })
        .catch((error) => {
          //
        })
    }
  },
  watch: {
    'resource_id' () {
      //
    },
    'resource_type' () {
      //
    }
  }
}
</script>

<style scoped>

</style>
