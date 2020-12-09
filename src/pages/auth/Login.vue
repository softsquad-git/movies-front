<template>
  <q-form @submit.prevent="save">
    <q-input
      type="email"
      :label="$t('pages.auth.form.email')"
      v-model="data.email"
    />
    <q-input
      type="password"
      class="mt-1"
      :label="$t('pages.auth.form.password')"
      v-model="data.password"
    />
    <q-btn
      flat
      type="submit"
      :label="$t('pages.auth.login.title')"
      />
  </q-form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      data: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    save() {
      this.$axios.post('auth/login', this.data)
      .then((data) => {
        if (data.data.success === 1) {
          localStorage.setItem('token', data.data.payload.access_token);
          localStorage.setItem('user_id', data.data.payload.user_id);
          localStorage.setItem('name', data.data.payload.name);
          localStorage.setItem('avatar', data.data.payload.avatar);
          if (data.data.payload.is_verified === 0) {
            return this.$router.push({name: 'Auth', params: {action: 'activate'}})
          }
          return this.$router.push({name: 'IndexPage'})
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
