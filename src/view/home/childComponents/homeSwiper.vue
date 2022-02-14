<template>
  <swiper>
    <swiper-item v-for="item in banner"
                 :key="item.title">
      <a :href="item.link">
        <img :src="item.image"
             @load="imageLoad"
             alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  props: {
    banner: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      isLoad: false
    }
  },
  methods: {
    imageLoad () {
      if (!this.isLoad) {
        this.$emit('imageLoad')
        this.isLoad = true
      }

    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>