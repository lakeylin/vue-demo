<template>
  <div class="goodsdesc-container">
    <h3>{{ goodinfo.title }}</h3>

    <hr>

    <div class="content" v-html="goodinfo.content"></div>
    <ul>
      <li v-for="(item, index) in goodinfo.img_url" :key="index">
        <img v-lazy="item">
      </li>
    </ul>
  </div>
</template>

<script>
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
    }
  }
}
  
</script>
<style lang="scss">
.goodsdesc-container {
  padding: 4px;
  h3 {
    font-size: 16px;
    color: #226aff;
    text-align: left;
    margin: 15px 0;
  }
  img[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
  img {
    width: 100%;
    height: auto;
  }
  li {
    list-style-type: none;
  }
}
</style>