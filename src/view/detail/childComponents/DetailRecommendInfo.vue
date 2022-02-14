<template>
  <div class="recommend-info-wrap flex"
       v-if="Object.keys(recommendInfo).length !== 0">
    <div class="recommend-info-list"
         v-for="(item, index) in recommendInfo"
         :key="index">
      <img :src="item.image"
           alt=""
           class="recommend-info-img">
      <div class="recommend-info-title">{{item.title}}</div>
      <div>
        <span class="recommend-info-price">{{item.discountPrice}}</span>
        <span><img src="~assets/img/home/collect_icon.png"
               alt=""
               class="icon">{{item.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailRecommendInfo',
  props: {
    recommendInfo: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.flex {
  display: flex;
}
.recommend-info-wrap {
  padding: 0 8px;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #fff;
  border-top: 4px solid #ececec;
}
.recommend-info-wrap .recommend-info-list {
  width: 49%;
  margin-top: 6px;
}
.recommend-info-wrap .recommend-info-title {
  width: 100%;
  font-size: 14px;
  margin: 4px 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.recommend-info-wrap .recommend-info-img {
  width: 100%;
  border-radius: 6px;
}
.recommend-info-wrap .recommend-info-price {
  color: var(--color-text);
  margin-right: 6px;
}
.recommend-info-wrap .icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: -4px;
}
</style>
