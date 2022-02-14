<template>
  <div class="wrapper"
       ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      // 是否监听滚动事件
      probeType: this.probeType,
      // 内容是否可点击
      click: true,
      // 是否监听上拉事件
      pullUpLoad: this.pullUpLoad
    })
    if (this.probeType) {
      this.scroll.on('scroll', (position) => {
        this.$emit('scrollBackTop', position)
      })
    }
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }

  },
  methods: {
    scrollTo (x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp () {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>