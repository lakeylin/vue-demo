<template>
  <div class="goodsinfo-container">
    <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item, index) in goodinfo.img_url" :key="index">
              <img :src="item" alt="">
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
    </div>
    <!-- 这里是商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{ goodinfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">市场价：<del>￥{{ goodinfo.market_price }}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{ goodinfo.sell_price }}</span></p>
          <p>购买数量：<num-box @getcount="getSelectedCount" :max="goodinfo.stock_quantity"></num-box></p>
          <p>
            <mt-button type="primary">立即购买</mt-button>
            <mt-button type="danger" @click="addToCart">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <!-- 这是商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号： SD1223342{{ id }}</p>
          <p>库存情况：{{ goodinfo.stock_quantity }}</p>
          <p>上架时间：{{ goodinfo.add_time }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>

  </div>
</template>

<script>
import numbox from '../subcomponents/goodinfo_numbox.vue'
export default {
  data() {
    return {
      id: this.$route.params.id,
      goodinfo: {},
      ballFlag: false,
      selectedCount: 1
    }
  },
  created() {
    this.getGoodInfo()
  },
  methods: {
    getGoodInfo() {
      this.$http.get("/api/goods").then(result => {
        if (result.body.errno === 0) {
          this.goodinfo = result.body.data.find(item => {
            return item.id == this.id
          })
        }
      })
    },
    goDesc(id) {
      this.$router.push({ name: "goodsdesc", params: { id }})
    },
    goComment(id) {
      this.$router.push({ name: "goodscomment", params: { id }})
    },
    addToCart() {
      this.ballFlag = !this.ballFlag
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)"
    },
    enter(el,done) {
      el.offsetWidth

      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // 获取 徽标 在页面中的位置
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();

      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;
      el.style.transform = `translate(${xDist}px, ${yDist}px)`
      el.style.transition = "all 0.8s cubic-bezier(.15,-0.08,.87,.09)"
      done()
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag
    },
    getSelectedCount(count) {
      this.selectedCount = count;
    }
  },
  components: {
    'numBox': numbox
  }
}
</script>

<style lang="scss" scoped>
  .goodsinfo-container {
    background-color: #eee;
    overflow: hidden;
    .mint-swipe {
      height: 200px;
      text-align: center;
      img {
        height: 100%;
      }
    }
    .now_price {
      color: red;
      font-size: 16px;
      font-weight: bold;
    }

    .mui-card-footer {
      display: block;
      button {
        margin: 15px 0;
      }
    }

    .ball {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: rgba(255,0,0,.4);
      position: absolute;
      z-index: 99;
      top: 428px;
      left: 78px;
    }
  }

</style>