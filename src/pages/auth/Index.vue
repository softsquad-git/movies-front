<template>
  <div class="auth-page">
    <div class="row flex justify-center">
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
        <div class="card shadow-2">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6 p-5">
              <q-btn class="full-width"
                     flat
                     :class="$route.params.action == 'login' ? 'b-active' : ''"
                     @click="redirect('login')"
                     :label="$t('pages.auth.login.title')"
              />
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 p-5">
              <q-btn class="full-width"
                     flat
                     :class="$route.params.action === 'register' ? 'b-active' : ''"
                     @click="redirect('register')"
                     :label="$t('pages.auth.register.title')"
              />
            </div>
          </div>
          <div class="_content">
            <component :is="currentComponent" ref="currentComponent"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";

export default {
  name: "Index",
  data() {
    return {
      currentComponent: Login
    }
  },
  methods: {
    redirect(action) {
      if (action === 'register') {
        this.currentComponent = Register;
      }
      if (action === 'login') {
        this.currentComponent = Login;
      }
      return this.$router.push({name: 'Auth', params: {action: action}})
    },
  },
  created() {
    this.redirect(this.$route.params.action)
  }
}
</script>

<style scoped>

</style>
