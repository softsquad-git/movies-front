import Vue from 'vue'
import VueCoreVideoPlayer from 'vue-core-video-player'
Vue.use(VueCoreVideoPlayer);
Vue.prototype.$userName = localStorage.getItem('name');
Vue.prototype.$userId = localStorage.getItem('user_id');
Vue.prototype.$userToken = localStorage.getItem('token');
Vue.prototype.$avatar = localStorage.getItem('avatar');
Vue.use(require('vue-moment'));
