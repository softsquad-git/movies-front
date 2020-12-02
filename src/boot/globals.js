import Vue from 'vue'

Vue.prototype.$userName = localStorage.getItem('name');
Vue.prototype.$userId = localStorage.getItem('user_id');
Vue.prototype.$userToken = localStorage.getItem('token');
