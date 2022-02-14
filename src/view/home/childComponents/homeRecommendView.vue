<template>
  <div class="recommend">
    <div class="recommend-item"
         v-for="item in recommend"
         :key="item.sort">
      <a :href="item.link">
        <img :src="item.image">
      </a>
      <p>{{item.title}}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "homeRecommendView",
  props: {
    recommend: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style>
.recommend {
  display: flex;
  background-color: #fff;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #ededed;
}
.recommend-item {
  flex: 1;
  text-align: center;
}
.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>