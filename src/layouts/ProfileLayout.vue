<template>
 <div class="profile-page">
   <div class="row">
     <div class="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12">
       <div class="text-center">
         <q-img :src="user.avatar" :alt="user.name.full" class="__avatar"></q-img>
         <div class="__name">
           {{ user.name.full }}
         </div>
       </div>
       <div class="__nav">
         <router-link :to="{name: 'UserProfileInfo'}" class="___link">
           {{ $t('page.profile.info.title') }}
         </router-link>
         <router-link :to="{name: 'UserProfileMovies'}" class="___link">
           {{ $t('page.profile.movies') }}
         </router-link>
         <router-link :to="{name: 'UserProfilePhotos'}" class="___link">
           {{ $t('page.profile.photos') }}
         </router-link>
       </div>
     </div>
     <div class="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-xs-12">
       <router-view/>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: "ProfileLayout",
  data() {
    return {
      user: {}
    }
  },
  methods: {
    findData() {
      this.$axios.get(`front/profile/user/find/${this.$route.params.id}`)
        .then((data) => {
          this.user = data.data.data;
        })
        .catch((error) => {
          //
        })
    }
  },
  created() {
    this.findData()
  }
}
</script>

<style scoped>

</style>
