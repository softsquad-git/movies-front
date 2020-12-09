<template>
  <div>
    <q-form @submit.prevent="save">
      <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-input
            type="text"
            :label="$t('pages.auth.form.name')"
            :hint="$t('pages.auth.form.name_hint')"
            v-model="data.name"
          />
          <q-input
            type="text"
            class="mt-1"
            :label="$t('pages.auth.form.last_name')"
            :hint="$t('pages.auth.form.last_name_hint')"
            v-model="data.last_name"
          />
          <q-select
            v-model="data.sex"
            :options="sexOptions"
            class="mt-1"
            :label="$t('pages.auth.form.sex.title')"
            :hint="$t('pages.auth.form.sex.title_hint')"
            emit-value
            map-options
            option-value="value"
            option-label="label"
          />
          <q-input :label="$t('pages.auth.form.birthday')" :hint="$t('pages.auth.form.birthday_hint')"
                   v-model="data.birthday" class="mt-1">
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
          <q-input
            type="text"
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
        <div class="col-12">
          <q-btn type="submit"
                 :label="$t('buttons.save')"
          />
        </div>
      </div>
    </q-form>
    <div class="row" style="margin-top: 40px">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <change-email/>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <change-password/>
      </div>
    </div>
    <error-component :errors="errors" ref="onErrorComponent"/>
  </div>
</template>

<script>
export default {
  name: "BasicData",
  components: {
    ErrorComponent: () => import('components/ErrorComponent'),
    ChangeEmail: () => import('pages/account/settings/partials/ChangeEmail'),
    ChangePassword: () => import('pages/account/settings/partials/ChangePassword')
  },
  data() {
    return {
      data: {
        name: '',
        last_name: '',
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
      ],
      dataEmail: {
        email: ''
      },
      dataPassword: {
        old_password: '',
        new_password: ''
      },
      errors: []
    }
  },
  methods: {
    save() {
      this.$axios.post('user/settings/basic-data', this.data)
        .then((data) => {
          if (data.data.success === 1) {
            this.getLoggedData();
            this.$q.notify({
              message: data.data.msg
            })
          }
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
            this.$refs.onErrorComponent.openModal()
          }
        })
    },
    getLoggedData() {
      this.$axios.get('user/logged')
        .then((data) => {
          const item = data.data.data;
          this.data.name = item.name.first;
          this.data.last_name = item.name.last;
          this.data.birthday = item.birthday;
          this.data.sex = item.sex.code;
          this.data.info.country = item.info.country;
          this.data.info.contact_phone = item.info.contact_phone;
          this.data.info.address = item.info.address;
          this.data.info.post_code = item.info.post_code;
          this.data.info.city = item.info.city;
        })
    }
  },
  created() {
    this.getLoggedData();
  }
}
</script>

<style scoped>

</style>
