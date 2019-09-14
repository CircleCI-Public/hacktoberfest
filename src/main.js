import Vue from 'vue'
import App from './App.vue'

import limitString from './mixins/limitString'
import getRepoName from './mixins/getRepoName'

Vue.config.productionTip = false
Vue.mixin(limitString)
Vue.mixin(getRepoName)

new Vue({
  render: h => h(App),
}).$mount('#app')

