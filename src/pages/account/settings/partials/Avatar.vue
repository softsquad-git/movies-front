<template>
  <div class="row">
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <avatar-component
        :src="avatar"
        :width="300"
        :height="300"
        :unit="'px'"
      />
      <q-uploader :label="$t('pages.account.settings.pages.form.avatar')"
                  :multiple="false"
                  style="width: 300px!important;"
                  :factory="save"
                  flat
                  accept=".jpg, .png, .gif, image/*"
                  ref="files">
      </q-uploader>
    </div>
  </div>
</template>

<script>
import AvatarComponent from "components/AvatarComponent";

export default {
  name: "Avatar",
  components: {AvatarComponent},
  data() {
    return {
      avatar: '',
      data: {
        image: ''
      }
    }
  },
  methods: {
    getLoggedData() {
      this.$axios.get('user/logged')
        .then((data) => {
          this.avatar = data.data.data.avatar
        })
    },
    save() {
      this.data.image = this.$refs.files.files;
      let formData = new FormData();
      let file = this.data.image;
      formData.append('image', file[0], file.name);
      this.$axios.post('user/settings/change-avatar', formData)
        .then((data) => {
          if (data.data.success === 1) {
            this.getLoggedData();
            this.$q.notify({
              message: data.data.msg
            });
            this.data.image = '';
          }
        })
        .catch((error) => {
          //
        })
    }
  },
  created() {
    this.getLoggedData()
  }
}
</script>

<style scoped>

</style>
