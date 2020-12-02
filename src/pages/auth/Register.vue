<template>
  <q-form @submit.prevent="save">
    <div class="row">
      <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <q-input
          type="text"
          :label="$t('pages.auth.form.name')"
          :hint="$t('pages.auth.form.name_hint')"
          v-model="data.name"
        />
      </div>
      <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <q-input
          type="text"
          :label="$t('pages.auth.form.last_name')"
          :hint="$t('pages.auth.form.last_name_hint')"
          v-model="data.last_name"
        />
      </div>
    </div>
    <q-input
      type="email"
      class="mt-1"
      :label="$t('pages.auth.form.email')"
      :hint="$t('pages.auth.form.email_hint')"
      v-model="data.email"
    />
    <q-input
      type="password"
      class="mt-1"
      :label="$t('pages.auth.form.password')"
      :hint="$t('pages.auth.form.password_hint')"
      v-model="data.password"
    />
    <div class="row mt-1">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-input :label="$t('pages.auth.form.birthday')" :hint="$t('pages.auth.form.birthday_hint')"
                 v-model="data.birthday">
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-date v-model="data.birthday" mask="YYYY-MM-DD">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup :label="$t('buttons.close')" color="primary" flat/>
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-select
          v-model="data.sex"
          :options="sexOptions"
          :label="$t('pages.auth.form.sex.title')"
          :hint="$t('pages.auth.form.sex.title_hint')"
          emit-value
          map-options
          option-value="value"
          option-label="label"
        />
      </div>
    </div>
    <q-btn type="button"
           @click="isShowMore ^= true"
           :label="isShowMore ? $t('buttons.less') : $t('buttons.more')"
           class="full-width mt-1 mb-1"
           flat
    />
    <div v-if="isShowMore">
      <q-input
        type="text"
        class="mt-1"
        v-model="data.info.country"
        :label="$t('pages.auth.form.country')"
        :hint="$t('pages.auth.form.country_hint')"
      />
      <div class="row mt-1">
        <div class="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-xs-12">
          <q-input
            type="text"
            mask="xx-xxx"
            v-model="data.info.post_code"
            :label="$t('pages.auth.form.post_code')"
            :hint="$t('pages.auth.form.post_code_hint')"
          />
        </div>
        <div class="col-xl-8 col-lg-8 col-md-7 col-sm-12 col-xs-12">
          <q-input
            type="text"
            v-model="data.info.city"
            :label="$t('pages.auth.form.city')"
            :hint="$t('pages.auth.form.city_hint')"
          />
        </div>
      </div>
      <q-input
        type="text"
        v-model="data.info.address"
        class="mt-1"
        :label="$t('pages.auth.form.address')"
        :hint="$t('pages.auth.form.address_hint')"
      />
      <q-input
        type="text"
        class="mt-1"
        v-model="data.info.contact_phone"
        :label="$t('pages.auth.form.contact_phone')"
        :hint="$t('pages.auth.form.contact_phone_hint')"
      />
    </div>
    <q-btn
      flat
      type="submit"
      :label="$t('pages.auth.register.title')"
    />
    <p class="info">
      {{ $t('pages.auth.register.info') }}
      <router-link to="">{{ $t('globals.nav.reg') }}</router-link>
      <router-link to="">{{ $t('globals.nav.pp') }}</router-link>
    </p>
  </q-form>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      title: this.$t('pages.auth.register.title'),
      isShowMore: false,
      data: {
        name: '',
        last_name: '',
        email: '',
        password: '',
        birthday: '',
        sex: '',
        info: {
          country: '',
          city: '',
          post_code: '',
          address: '',
          contact_phone: ''
        }
      },
      sexOptions: [
        {label: this.$t('pages.auth.form.sex.labels.male'), value: 2},
        {label: this.$t('pages.auth.form.sex.labels.female'), value: 1}
      ]
    }
  },
  methods: {
    save() {
      this.$axios.post('auth/register', this.data)
      .then((data) => {
        if (data.data.success === 1) {
          this.$q.notify({
            message: data.data.msg
          })
          this.data.name = '';
          this.data.last_name = '';
          this.data.email = '';
          this.data.password = '';
          this.data.birthday = '';
          this.data.sex = '';
          this.data.info.post_code = '';
          this.data.info.city = '';
          this.data.info.address = '';
          this.data.info.contact_phone = '';
          this.data.info.country = '';
          this.$router.push({
            name: 'Auth',
            params: {
              action: 'login'
            }
          })
          window.location.reload();
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
