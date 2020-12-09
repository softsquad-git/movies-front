<template>
  <q-form @submit.prevent="save">
    <q-input
      v-model="data.content"
      type="textarea"
      :label="$t('comments.form.answers.content')"
      :hint="$t('comments.form.answers.content_hint')"
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
  name: "CommentReplyCreateComponent",
  data() {
    return {
      data: {
        comment_id: this.comment_id,
        content: ''
      }
    }
  },
  props: {
    comment_id: ''
  },
  methods: {
    save() {
      this.$axios.post(`comments/answers/create`, this.data)
      .then((data) => {
        if (data.data.success === 1) {
          this.$emit('success');
          this.$emit('close');
          this.$q.notify({
            message: data.data.msg
          });
          this.data.comment_id = '';
          this.data.content = '';
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
