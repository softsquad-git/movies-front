<template>
  <div>
    <vue-core-video-player :src="src"></vue-core-video-player>
  </div>
</template>

<script>
import VueCoreVideoPlayer from 'vue-core-video-player'
import Vue from 'vue'
Vue.use(VueCoreVideoPlayer);
export default {
  name: "MovieComponent",
  props: {
    src: '',
    width: '',
    unit: ''
  }
}
</script>

<style scoped>

</style>
