<template>
  <div>
    <div class="mui-numbox" data-numbox-min='1'>
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countChanged" ref="numbox"/>
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
  mounted() {
    mui(".mui-numbox").numbox()
  },
  methods: {
    countChanged(){
      // 每当数量值改变，则立即把最新的数量同步到 购物车的 store 中，覆盖之前的数量值
      this.$store.commit('updateCount', {
        id: this.goodid,
        count: this.$refs.numbox.value
      })
    }
  },
  props: ['initcount', 'goodid']
}
</script>

<style lang="scss" scoped>
  
</style>