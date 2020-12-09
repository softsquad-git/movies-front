<template>
  <div>
    <div class="text-h6 q-mb-md">{{ $t('pages.account.settings.pages.form.change_password') }}</div>
    <q-form @submit.prevent="save">
      <q-input
        type="text"
        class="mt-1"
        :label="$t('pages.account.settings.pages.form.old_password')"
        :hint="$t('pages.account.settings.pages.form.old_password_hint')"
        v-model="data.old_password">
      </q-input>
      <q-input
        type="text"
        class="mt-1"
        :label="$t('pages.account.settings.pages.form.new_password')"
        :hint="$t('pages.account.settings.pages.form.new_password_hint')"
        v-model="data.new_password">
      </q-input>
      <q-btn type="submit" class="mt-1" :label="$t('buttons.save')"/>
    </q-form>
    <error-component :errors="errors" ref="onErrorComponent"/>
  </div>
</template>

<script>
export default {
  name: "ChangePassword",
  components: {
    ErrorComponent: () => import('components/ErrorComponent')
  },
  data() {
    return {
      data: {
        old_password: '',
        new_password: ''
      },
      errors: []
    }
  },
  methods: {
    save() {
      this.$axios.post('user/settings/change-password', this.data)
        .then((data) => {
          if (data.data.success === 1) {
            this.$q.notify({
              message: data.data.msg
            });
            this.data.new_password = '';
            this.data.old_password = '';
          }
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
            this.$refs.onErrorComponent.openModal()
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
