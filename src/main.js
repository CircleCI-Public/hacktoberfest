import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import getRepoName from '@/mixins/getRepoName'

import { library } from "@fortawesome/fontawesome-svg-core"
import { faComments, faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faTwitter, faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
library.add(faComments)
library.add(faGlobe)
library.add(faTwitter)
library.add(faLinkedin)
library.add(faGithub)
library.add(faFacebook)

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false
Vue.mixin(getRepoName)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
