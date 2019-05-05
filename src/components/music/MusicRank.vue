<template>
  <div>
    <ul class="mui-table-view"> 
      <li class="mui-table-view-cell mui-collapse" v-for="item in rankList" :key="item.name">
        <a class="mui-navigate-right" href="#">
          <img :src="item.pic_s210" :alt="item.name" :title="item.name">
        </a>
        <div class="mui-collapse-content">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(song, index) in item.content" :key="song.song_id">
              <a href="#">
                <img class="mui-media-object mui-pull-left" :src="song.pic_small">
                <div class="mui-media-body">
                  {{ song.title }}
                  <p class='mui-ellipsis'>歌手：{{ song.author }}
                    <span class="mui-pull-right">排名：{{ index + 1}}</span></p>              
                </div>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rankList: []
    }
  },
  created() {
    this.getRankList()
  },
  methods: {
    getRankList() {
      this.$http.get("https://api.apiopen.top/musicRankings").then(result => {
        if (result.body.code === 200) {
          this.rankList = result.body.result
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mui-table-view {
  .mui-table-view-cell {
    padding-left: 0;
  }
}
</style>
