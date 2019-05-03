import VueRouter from 'vue-router'

//导入对应路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import CartContainer from './components/tabbar/CartContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import ToutiaoNews from './components/news/ToutiaoNews.vue'
import TechNews from './components/news/TechNews.vue'
import SportsNews from './components/news/SportsNews.vue'
import MoneyNews from './components/news/MoneyNews.vue'
import EntNews from './components/news/EntNews.vue'


var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/cart', component: CartContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/newslist', component: NewsList,
      children: [
        { path: 'toutiao', component: ToutiaoNews },
        { path: 'tech', component: TechNews },
        { path: 'sports', component: SportsNews },
        { path: 'money', component: MoneyNews },
        { path: 'ent', component: EntNews }
      ] 
    }
  ],
  linkActiveClass: 'mui-active'
})

export default router