<template>
  <q-form @submit.prevent="save">
    <div class="row">
      <div class="col-8">
        <q-input
          v-model="data.title"
          :label="$t('pages.account.stories.form.title')"
          :hint="$t('pages.account.stories.form.title_hint')"
        />
      </div>
      <div class="col-4">
        <q-select
          v-model="data.category_id"
          :options="categories"
          :label="$t('pages.account.stories.form.category')"
          :hint="$t('pages.account.stories.form.category_hint')"
          emit-value
          map-options
          option-value="id"
          option-label="name"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <q-editor
          v-model="data.content"
        />
      </div>
    </div>
    <div class="row mt-1">
      <div class="col-6">
        <q-select
          v-model="data.is_comment"
          :options="boolOptions"
          :label="$t('pages.account.stories.form.is_comment')"
          :hint="$t('pages.account.stories.form.is_comment_hint')"
          emit-value
          map-options
          option-value="value"
          option-label="text"
        />
      </div>
      <div class="col-6">
        <q-select
          v-model="data.is_rating"
          :options="boolOptions"
          :label="$t('pages.account.stories.form.is_rating')"
          :hint="$t('pages.account.stories.form.is_rating_hint')"
          emit-value
          map-options
          option-value="value"
          option-label="text"
        />
      </div>
    </div>
    <error-component :errors="errors" ref="onErrorComponent"/>
  </q-form>
</template>

<script>
export default {
  name: "Edit",
  components: {
    ErrorComponent: () => import('components/ErrorComponent')
  },
  data() {
    return {
      data: {
        title: '',
        category_id: '',
        content: '',
        is_comment: 1,
        is_rating: 1
      },
      categories: [],
      boolOptions: [
        {value: 1, text: this.$t('globals.yes')},
        {value: 0, text: this.$t('globals.no')}
      ],
      errors: []
    }
  },
  methods: {
    save() {
      this.$axios.post(`user/stories/update/${this.$route.params.id}`, this.data)
        .then((data) => {
          if (data.data.success === 1) {
            this.$router.push({name: 'AccountStories'});
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
    }
  },
  created() {
    this.$axios.get('categories/all')
      .then((data) => {
        this.categories = data.data.data
      }).catch((error) => {
    });
    this.$axios.get(`user/stories/find/${this.$route.params.id}`)
      .then((data) => {
        const story = data.data.data;
        this.data.title = story.title;
        this.data.category_id = story.category.id;
        this.data.content = story.content;
        this.data.is_comment = story.is_comment;
        this.data.is_rating = story.is_rating;

      })
      .catch((error) => {

      })
  }
}
</script>

<style scoped>

</style>
