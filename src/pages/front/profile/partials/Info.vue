<template>
  <div class="____page">
    <div class="_title">
      {{ $t('page.profile.info.title') }}
    </div>
    <div class="_content">
      <div class="q-table__middle">
        <table class="q-table">
          <thead>
          </thead>
          <tbody>
          <tr>
            <td>{{ $t('page.profile.info.name') }}</td>
            <td>{{ user.name }}</td>
          </tr>
          <tr>
            <td>{{ $t('page.profile.info.created_at') }}</td>
            <td>{{ user.created_at }}</td>
          </tr>
          <tr v-if="user.birthday !== null">
            <td>{{ $t('page.profile.info.birthday') }}</td>
            <td>{{ user.birthday }}</td>
          </tr>
          <tr v-if="user.email !== null">
            <td>{{ $t('page.profile.info.email') }}</td>
            <td>{{ user.email }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      user: {}
    }
  },
  methods: {
    findData() {
      this.$axios.get(`front/profile/user/find-info/${this.$route.params.id}`)
        .then((data) => {
          this.user = data.data.data;
        })
        .catch((error) => {
          //
        })
    }
  },
  created() {
    this.findData();
  }
}
</script>

<style scoped>

</style>
