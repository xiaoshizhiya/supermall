<template>
  <div class="goods-list">
    <goods-item v-for="item in goodsList"
                :key="item.iid"
                :goodsItem="item" />
  </div>
</template>

<script>
import GoodsItem from './goodsItem.vue'
export default {
  name: "GooodsList",
  props: {
    goodsList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    GoodsItem
  }
}
</script>

<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
}
</style>