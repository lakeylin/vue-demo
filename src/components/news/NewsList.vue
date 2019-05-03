<template>
  <div>
    <div id="segmentedControl" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-primary">
      <router-link class="mui-control-item" to="/home/newslist/toutiao">头条</router-link>
      <router-link class="mui-control-item" to="/home/newslist/sports">体育</router-link>
      <router-link class="mui-control-item" to="/home/newslist/tech">科技</router-link>
      <router-link class="mui-control-item" to="/home/newslist/ent">娱乐</router-link>
      <router-link class="mui-control-item" to="/home/newslist/money">财经</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
  
</style>