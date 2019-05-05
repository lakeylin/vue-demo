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
import MusicRank from './components/music/MusicRank.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'

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
    },
    { path: '/home/musicrank', component: MusicRank },
    { path: '/home/goodslist', component: GoodsList },
    { path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo' },
    { path: '/home/goodsdesc/:id', component: GoodsDesc, name: 'goodsdesc' },
    { path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment' }
  ],
  linkActiveClass: 'mui-active'
})

export default router