<template>
  <div class="page">
    <div class="page-movie">
      <div class="row">
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 p-5">
          <div class="_content">
            <h3 class="title">{{ item.title }}</h3>
            <div class="info">
              <span class="_txt">{{ $t('page.movie.created_by') }}</span>
              <router-link :to="{name: 'FrontUserProfile', params: {name: item.user.name, id: item.user.id}}" class="_link">{{ item.user.name }}</router-link>
              <span class="_txt">{{ $t('page.movie.created_in') }}</span>
              <router-link to="#" class="_link">{{ item.category.name }}</router-link>
              <span class="_txt">{{ item.created_at }}</span>
            </div>
            <p class="mt-1" v-html="item.content"></p>
          </div>
          <div class="_footer">
            <rating-component class="like-footer" :resource_type="'STORY'" :resource_id="item.id"></rating-component>
            <like-component class="like-footer" :resource_id="item.id" :resource_type="'STORY'" :like="item.like.is_like"></like-component>
            <comments-component :resource_id="item.id" :resource_type="'STORY'"></comments-component>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-5">
          <div class="_sidebar">
            <h3>{{ $t('page.story.related.title') }}</h3>
            <div v-for="item in relatedStories" class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div class="story">
                <h4>
                  <router-link :to="{name: 'FrontStoryItem', params: {id: item.id}}">
                    {{ item.title }}
                  </router-link>
                </h4>
                <p v-html="item.short_content"></p>
                <div class="footer">
                  {{ item.created_at | moment('calendar') }} <span class="float-right">{{ item.category.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  components: {
    RatingComponent: () => import('components/RatingComponent'),
    LikeComponent: () => import('components/LikeComponent'),
    CommentsComponent: () => import('components/comments/CommentsComponent')
  },
  data() {
    return {
      item: {},
      relatedStories: []
    }
  },
  methods: {
    findData() {
      this.$axios.get(`front/stories/find/${this.$route.params.id}`)
        .then((data) => {
          this.item = data.data.data;
          this.getRelatedStories(data.data.data.category.id)
        })
        .catch((error) => {
          //
        })
    },
    getRelatedStories(categoryId) {
      this.$axios.get(`front/stories/all?category_id=${categoryId}&pagination=6`)
      .then((data) => {
        this.relatedStories = data.data.data;
      })
      .catch((error) => {
        //
      })
    }
  },
  watch: {
    '$route.params.id' () {
      this.findData()
    }
  },
  created() {
    this.findData();
  }
}
</script>

<style scoped>

</style>
