<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar"></detail-nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scrollBackTop="scrollBackTop">
      <detail-swiper :topImage="swiperImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="goodsInfo"
                         @imgLoad="imgLoad"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
      <goods-list :goodsList="recommendInfo"></goods-list>
      <!-- <detail-recommend-info :recommendInfo="recommendInfo"></detail-recommend-info> -->
    </scroll>
    <back-top @click.native="backTop"
              v-show="isShow"></back-top>
  </div>
</template>

<script>
import Scroll from 'components/common/Scroll'
import GoodsList from 'components/content/GoodsList'

import DetailNavBar from './childComponents/detailNavBar'
import DetailSwiper from './childComponents/detailSwiper'
import DetailBaseInfo from './childComponents/DetailBaseInfo.vue'
import DetailShopInfo from './childComponents/DetailShopInfo.vue'
import DetailGoodsInfo from './childComponents/DetailGoodsInfo.vue'
import DetailParamInfo from './childComponents/DetailParamInfo.vue'
import DetailCommentInfo from './childComponents/DetailCommentInfo.vue'
// import DetailRecommendInfo from './childComponents/DetailRecommendInfo.vue'


import { getDetailInfo, Goods, Shop, Param, getRecommend } from 'network/detail'
import { ScrollTopMixins } from 'common/mixin'
export default {
  name: 'Detail',
  mixins: [ScrollTopMixins],
  created () {
    // 1.获取商品详情
    const goodsId = this.$route.params.iid
    getDetailInfo(goodsId).then(res => {
      const { itemInfo, columns, shopInfo, detailInfo, itemParams, rate } = res.result
      this.swiperImages = itemInfo.topImages
      // 2.提取商品标题及价格、销量信息
      this.goods = new Goods(itemInfo, columns, shopInfo)
      // 3.提取商品商家信息
      this.shop = new Shop(shopInfo)
      // 4.提取商品详情
      this.goodsInfo = detailInfo
      // 5.提取参数信息
      const { info, rule } = itemParams
      this.paramInfo = new Param(info, rule)
      // 6.提取用户评价
      if (rate.cRate !== 0) {
        this.commentInfo = rate.list
      }
    })
    getRecommend().then(res => {
      this.recommendInfo = res.data.list
    })
  },
  data () {
    return {
      swiperImages: [],
      goods: {},
      shop: {},
      goodsInfo: {},
      paramInfo: {},
      commentInfo: [],
      recommendInfo: []
    }
  },
  methods: {
    imgLoad () {
      this.$refs.scroll.refresh()
    },
    scrollBackTop (position) {
      this.isShow = (-position.y) > 1000
    }
  },
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    // DetailRecommendInfo,
    GoodsList
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  background-color: #fff;
  z-index: 9;
  height: 100vh;
}
.detail-nav-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
}
</style>