import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

import VueAos from 'vue-aos'
Vue.use(VueAos)

import  '@/assets/css/index2.css'
import  '@/assets/css/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar,faPhone,faMapMarker,faHeart,faEnvelope, faGlobe,
	faLocationArrow,faLink,faCoffee, faSmile, faAddressBook, faUser}
	 
from '@fortawesome/free-solid-svg-icons'

library.add(faStar,faPhone, faMapMarker,faHeart,faEnvelope,faGlobe,
	faLocationArrow,faLink,faCoffee,faSmile, faAddressBook, faUser)


Vue.component('font-awesome-icon', FontAwesomeIcon)

window.$=window.jQuery=require('jquery')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
