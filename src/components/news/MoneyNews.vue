<template>
  <div>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.docid">
          <a :href="item.link">
            <img class="mui-media-object mui-pull-left" v-if="item.picInfo[0]" :src="item.picInfo[0].url">
            <div class="mui-media-body">
              {{ item.title }}
              <p class='mui-ellipsis'>{{ item.digest }} <br>
                <span>发表时间：{{ item.ptime }}</span></p>
            </div>
          </a>
        </li>
      </ul>
  </div>
</template>

<script>
  import { Toast } from "mint-ui";

  export default {
    data() {
      return {
        newslist: []
      }
    },
    created() {
      this.getNewsList();
    },
    methods: {
      getNewsList() {
        this.$http.get("https://www.apiopen.top/journalismApi").then(result => {
          if (result.body.code === 200) {
            this.newslist = result.body.data.money;
          } else {
            Toast("获取新闻列表失败！");
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mui-media-body {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>