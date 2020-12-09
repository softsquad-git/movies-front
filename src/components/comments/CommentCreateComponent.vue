<template>
  <q-form @submit.prevent="save">
    <q-input
      v-model="data.content"
      type="textarea"
      :label="$t('comments.form.create')"
      :hint="$t('comments.form.create_hint')"
    />
  </q-form>
</template>

<script>
export default {
  name: "CommentCreateComponent",
  data() {
    return {
      data: {
        resource_id: '',
        resource_type: '',
        content: ''
      }
    }
  },
  props: {
    resource_id: '',
    resource_type: ''
  },
  methods: {
    save() {
      this.data.resource_type = this.resource_type;
      this.data.resource_id = this.resource_id;
      this.$axios.post('comments/create', this.data)
        .then((data) => {
          if (data.data.success === 1) {
            this.$emit('success');
            this.$emit('close');
            this.data.content = '';
            this.$q.notify({
              message: data.data.msg
            })
          }
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
