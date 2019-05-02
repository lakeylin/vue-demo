import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import './lib/mui/css/mui.min.css'

// 按需导入 Mint-UI 中的组件
import { Header } from 'mint-ui'

Vue.component(Header.name, Header)

import router from './router.js'

import app from './App.vue'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})