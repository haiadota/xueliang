import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import './style/reset.css'
import './style/common.css'
var echarts = require('echarts')

Vue.prototype.$echarts = echarts

import store from './store'
Vue.config.productionTip = false
Vue.use(VueResource)

new Vue({
        router,
        store,
        resource:VueResource,
        render: h => h(App),
}).$mount('#app')

