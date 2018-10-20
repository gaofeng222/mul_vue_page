/**
 * Created by gaofeng on 2018/10/20.
 */

import Vue from 'vue'
import Index from './index.vue'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(Index)
})
