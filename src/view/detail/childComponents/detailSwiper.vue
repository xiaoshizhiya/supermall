<template>
  <div>
    <swiper class="detail-swiper">
      <swiper-item v-for="item in topImage"
                   :key="item">
        <a href="#">
          <img :src="item"
               alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  name: 'DetailSwiper',
  props: {
    topImage: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
.detail-swiper {
  height: 300px;
}
</style>