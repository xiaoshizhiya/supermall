<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">
        购物街
      </div>
    </nav-bar>
    <tab-control :title="['流行', '新款', '精选']"
                 @tabClick="tabClick"
                 class="tab-control"
                 v-show="isFixed"
                 ref="tabControl1" />
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scrollBackTop="scrollBackTop"
            @pullingUp="loadMore">
      <home-swiper :banner="banner"
                   @imageLoad="swiperImageLoad" />
      <home-recommend :recommend="recommend" />
      <home-feature />
      <tab-control :title="['流行', '新款', '精选']"
                   @tabClick="tabClick"
                   ref="tabControl2" />
      <goods-list :goodsList="goods[currentGoods].list" />
    </scroll>
    <back-top @click.native="backTop"
              v-show="isShow"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar'
import HomeSwiper from './childComponents/homeSwiper'
import HomeRecommend from './childComponents/homeRecommendView'
import HomeFeature from './childComponents/homeFeatureView.vue'

import TabControl from 'components/content/TabControl'
import GoodsList from 'components/content/GoodsList'
import Scroll from 'components/common/Scroll'

import { getHomeMultidata, getHomeGoods } from 'network/home'
import { imageLoadMixins, ScrollTopMixins } from 'common/mixin'


export default {
  name: 'Home',
  mixins: [imageLoadMixins, ScrollTopMixins],
  created () {
    // 1.请求多个数据
    this.getHomeMultidata()

    // 2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  activated () {
    // 回滚至离开时的位置
    this.$refs.scroll.scrollTo(0, this.scrollY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated () {
    // 保存滚动后的位置信息
    this.scrollY = this.$refs.scroll.scroll.y
  },
  data () {
    return {
      banner: null,
      recommend: null,
      currentGoods: 'pop',
      isFixed: false,
      homeNavHeight: 0,
      scrollY,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      }
    }
  },
  methods: {
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        const { banner: { list: banner }, recommend: { list: recommend } } = res.data
        this.banner = banner
        this.recommend = recommend
      })
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp()
      })
    },
    tabClick (index) {
      switch (index) {
        case 0:
          this.currentGoods = 'pop'
          break;
        case 1:
          this.currentGoods = 'new'
          break;
        case 2:
          this.currentGoods = 'sell'
          break;
      }
      this.$refs.tabControl1.currentIndex = this.$refs.tabControl2.currentIndex = index
    },
    scrollBackTop (position) {
      // 1.监听是否滚动到backTop显示的位置
      this.isShow = (-position.y) > 1000
      // 2.监听是否滚动到显示home-nav的位置
      this.isFixed = (-position.y) > this.homeNavHeight
    },
    loadMore () {
      this.getHomeGoods(this.currentGoods)
    },
    swiperImageLoad () {
      this.homeNavHeight = this.$refs.tabControl2.$el.offsetTop
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll
  }
}
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.tab-control {
  position: relative;
  z-index: 9;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>