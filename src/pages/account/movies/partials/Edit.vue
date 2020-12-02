<template>
  <q-form @submit.prevent="save">
    <div class="row">
      <div class="col-8">
        <q-input
          v-model="data.title"
          :label="$t('pages.account.movies.form.title')"
          :hint="$t('pages.account.movies.form.title_hint')"
        />
      </div>
      <div class="col-4">
        <q-select
          v-model="data.category_id"
          :options="categories"
          :label="$t('pages.account.movies.form.category')"
          :hint="$t('pages.account.movies.form.category_hint')"
          emit-value
          map-options
          option-value="id"
          option-label="name"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <q-input
          v-model="data.description"
          clearable
          autogrow
          :label="$t('pages.account.movies.form.description')"
          :hint="$t('pages.account.movies.form.description_hint')"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <q-select
          v-model="data.is_comment"
          :options="boolOptions"
          :label="$t('pages.account.movies.form.is_comment')"
          :hint="$t('pages.account.movies.form.is_comment_hint')"
          emit-value
          map-options
          option-value="value"
          option-label="text"
        />
      </div>
      <div class="col-4">
        <q-select
          v-model="data.is_rating"
          :options="boolOptions"
          :label="$t('pages.account.movies.form.is_rating')"
          :hint="$t('pages.account.movies.form.is_rating_hint')"
          emit-value
          map-options
          option-value="value"
          option-label="text"
        />
      </div>
      <div class="col-4">
        <q-uploader :label="$t('pages.account.movies.form.file')"
                    :multiple="false"
                    class="full-width"
                    :factory="save"
                    accept=".jpg, .png, .gif, image/*"
                    ref="files">
        </q-uploader>
      </div>
    </div>
  </q-form>
</template>

<script>
export default {
  name: "Edit",
  data() {
    return {
      data: {
        title: '',
        description: '',
        category_id: '',
        is_comment: 1,
        is_rating: 1,
        file: null
      },
      categories: [],
      boolOptions: [
        {value: 1, text: this.$t('globals.yes')},
        {value: 0, text: this.$t('globals.no')}
      ]
    }
  },
  methods: {
    save() {
      this.data.file = this.$refs.files.files;
      if (this.data.file.length > 0) {
        let formData = new FormData();
        let file = this.data.file;
        formData.append('file', file[0], file.name);
        formData.append('title', this.data.title);
        formData.append('category_id', this.data.category_id);
        formData.append('description', this.data.description);
        formData.append('is_comment', this.data.is_comment);
        formData.append('is_rating', this.data.is_rating);
        return this.saveData(formData)
      }
      this.data.file = null;
      return this.saveData(this.data);
    },
    saveData(data) {
      this.$axios.post(`user/movies/update/${this.$route.params.id}`, data)
        .then((data) => {
          if (data.data.success === 1) {
            this.$router.push({name: 'AccountMovies'});
            this.$q.notify({
              message: data.data.msg
            })
          }
        })
        .catch((error) => {
          //
        })
    }
  },
  created() {
    this.$axios.get('categories/all')
      .then((data) => {
        this.categories = data.data.data
      }).catch((error) => {
    })
    this.$axios.get(`user/movies/find/${this.$route.params.id}`)
      .then((data) => {
        const movie = data.data.data;
        this.data.title = movie.title;
        this.data.category_id = movie.category.id;
        this.data.description = movie.description;
        this.data.is_rating = movie.is_rating;
        this.data.is_comment = movie.is_comment;
      })
      .catch((error) => {
        //
      })
  }
}
</script>

<style scoped>

</style>
