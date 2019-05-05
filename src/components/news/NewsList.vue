<template>
  <div>
    <div id="segmentedControl" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-primary">
      <router-link class="mui-control-item-llb" to="/home/newslist/toutiao">头条</router-link>
      <router-link class="mui-control-item-llb" to="/home/newslist/sports">体育</router-link>
      <router-link class="mui-control-item-llb" to="/home/newslist/tech">科技</router-link>
      <router-link class="mui-control-item-llb" to="/home/newslist/ent">娱乐</router-link>
      <router-link class="mui-control-item-llb" to="/home/newslist/money">财经</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item-llb.mui-active {
    color: #007aff;
    border-bottom: 2px solid #007aff;
    background: 0 0;
}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item-llb {
    border: 0;
}
.mui-segmented-control .mui-control-item-llb.mui-active {
    color: #fff;
    background-color: #007aff;
}
.mui-segmented-control .mui-control-item-llb {
    line-height: 38px;
    display: table-cell;
    overflow: hidden;
    width: 1%;
    -webkit-transition: background-color .1s linear;
    transition: background-color .1s linear;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #007aff;
    border-color: #007aff;
    border-left: 1px solid #007aff;
}
</style>