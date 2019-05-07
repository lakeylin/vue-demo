<template>
  <div class="cart-container">
    <div class="goods-list">
      <!-- 商品列表项区域 -->
      <div class="mui-card" v-for="item in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						  <mt-switch :v-model="$store.getters.getGoodsSelected[item.id]"></mt-switch>
              <img :src="item.thumb">
              <div class="info">
                <h1>{{ item.title }}</h1>
                <p>
                  <span class="price">￥{{ item.price }}</span>
                  <num-box :initcount="$store.getters.getGoodsCount[item.id]"></num-box>
                  <a href="#">删除</a>
                </p>
              </div>
					</div>
				</div>
			</div>

      <!-- 结算区域 -->
      <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
					</div>
				</div>
			</div>
    </div>
  </div>
</template>

<script>
import numbox from '../subcomponents/cart_numbox.vue'

export default {
  data() {
    return {
      goodslist: [],
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    getGoodsList() {
      this.goodslist = JSON.parse(localStorage.getItem('cart') || '[]')
    }
  },
  components: {
    'numBox': numbox
  }
}
</script>

<style lang="scss" scoped>
.cart-container {
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 60px;
    }
    h1 {
      font-size: 13px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price {
        color: red;
        font-weight: bold;
      }
      div{
        display: inline-block;
      }
    }
  }
  .check-out {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>