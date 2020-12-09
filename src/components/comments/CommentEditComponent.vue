<template>
  <q-form @submit.prevent="save">
    <q-input
      v-model="data.content"
      type="textarea"
      :label="$t('comments.form.edit')"
      :hint="$t('comments.form.edit_hint')"
    />
    <q-btn
      @click="save"
      type="submit"
      round
      icon="save"
      padding="5px"
      >
      <q-tooltip>
        {{ $t('buttons.save') }}
      </q-tooltip>
    </q-btn>
  </q-form>
</template>

<script>
export default {
  name: "CommentEditComponent",
  data() {
    return {
      data: {
        content: this.content
      }
    }
  },
  props: {
    id: '',
    content: ''
  },
  methods: {
    save() {
      this.$axios.post(`comments/update/${this.id}`, this.data)
        .then((data) => {
          if (data.data.success === 1) {
            this.$emit('success');
            this.$emit('close')
            this.$q.notify({
              message: data.data.msg
            })
          }
        })
        .catch((error) => {

        })
    }
  }
}
</script>

<style scoped>

</style>
