import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import Vuex from 'vuex'
Vue.use(Vuex)
// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

var cart = JSON.parse(localStorage.getItem('cart') || '[]')

var store = new Vuex.Store({
  state: {
    cart: cart//将购物车中商品的数据，用一个数组存储起来
  },
  mutations: { 
    addToCart(state, goodinfo) {
      // 点击加入购物车，把商品信息保存到 store 中的cart上
      // 分析：
      // 1. 如果购物车中，之前就已经有这个对应商品了，那么只需要更新数量
      // 2. 如果没有，则直接把商品数据push到cart中

      // 假设在购物车中，没有找到对应的商品
      var flag = false
      state.cart.some(item => {
        if (item.id == goodinfo.id) {
          item.count += parseInt(goodinfo.count)
          flag = true
          return true
        }
      })

      // 如果循环完毕，flag还是false，则没有找到对应商品
      if(!flag) {
        state.cart.push(goodinfo)
      }

      // 当更新 cart 之后，把 cart 数组存储到本地的 localStoreage中
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    updateCount(state, goodinfo) {
      state.cart.some(item => {
        if (item.id == goodinfo.id) {
          item.count = parseInt(goodinfo.count)
          return true
        }
      })
      // 把最新的购物车数据，保存到 localStorage中
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    removeFromCart(state, id) {
      state.cart.some((item, i) => {
        if (item.id == id) {
          state.cart.splice(i, 1)
          return true
        }
      })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    updateSelected(state, goodinfo) {
      state.cart.some(item => {
        if (item.id == goodinfo.id) {
          item.selected = goodinfo.selected
          return true
        }
      })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  getters: {
    getAllCount(state) {
      var c = 0
      state.cart.forEach(item => {
        c += item.count
      })
      return c
    },
    getGoodsCount(state) {
      var o = {}
      state.cart.forEach(item => {
        o[item.id] = item.count
      })
      return o
    },
    getGoodsSelected(state) {
      var o = {}
      state.cart.forEach(item => {
        o[item.id] = item.selected
      })
      return o
    },
    getGoodsCountAndAmount(state) {
      var o = {
        count: 0, // 勾选的数量
        amount: 0 // 勾选的总价
      }
      state.cart.forEach(item => {
        if (item.selected) {
          o.count += item.count
          o.amount += item.price * item.count
        }
      })
      return o
    }
  }
})

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import router from './router.js'

import app from './App.vue'

import moment from 'moment'

Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router,
  store
})