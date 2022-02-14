<template>
  <div class="goods-list-item"
       @click="toDetail">
    <img :src="showImg"
         @load="imageLoad"
         class="goods-list-img">
    <div class="goods-list-text">
      <div class="goods-list-name one-txt-cut">{{goodsItem.title}}</div>
      <div class="goods-list-price">
        <div class="text-pink">{{goodsItem.price}}</div>
        <div><i class="collect-icon"></i><span>{{goodsItem.cfav}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    imageLoad () {
      this.$bus.$emit('imageLoad')
    },
    toDetail () {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  },
  computed: {
    showImg () {
      const imageUrl = this.goodsItem.show?.img || this.goodsItem.image
      return imageUrl
    }
  }
}
</script>

<style scoped>
.goods-list-item {
  width: 48%;
  height: auto;
  padding-top: 6px;
  font-size: 14px;
}
.goods-list-img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}
.one-txt-cut {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.goods-list-price {
  display: flex;
  justify-content: space-between;
  margin: 6px 0;
}
.goods-list-price .text-pink {
  color: var(--color-tint);
}
.collect-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(~assets/img/home/collect_icon.png) no-repeat;
  background-size: cover;
  vertical-align: bottom;
}
</style>