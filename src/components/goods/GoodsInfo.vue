<template>
  <div class="goodsinfo-container">
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
          <p>购买数量：<num-box></num-box></p>
          <p>
            <mt-button type="primary">立即购买</mt-button>
            <mt-button type="danger">加入购物车</mt-button>
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
      goodinfo: {}
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
      background-color: red;
      position: absolute;
      z-index: 99;
      top: 390px;
      left: 146px;
    }
  }

</style>