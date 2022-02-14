import {debounce} from './util'
import BackTop from 'components/content/BackTop'

export const imageLoadMixins = {
  mounted() {
    // 使scroll组件实时监听数据变化增加高度
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    this.$bus.$on('imageLoad', refresh)
  }
}

export const ScrollTopMixins = {
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    backTop () {
      this.$refs.scroll.scrollTo(0, 0)
    }
  },
  components: {
    BackTop
  }
}