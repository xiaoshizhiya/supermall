<template>
  <div>
    <nav-bar>
      <div slot="left"
           class="backImg"
           @click="backHome">
        <img src="~assets/img/fanhui.png"
             alt="">
      </div>
      <div slot="center"
           class="title">
        <div v-for="(item, index) in navTitle"
             :class="{active: currentIndex ===index}"
             @click="navClick(index)"
             :key="item">
          {{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar'
export default {
  name: "DetailNavBar",
  data () {
    return {
      navTitle: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    navClick (index) {
      this.currentIndex = index
    },
    backHome () {
      this.$router.go(-1)
    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>
.title {
  display: flex;
}
.title div {
  flex: 1;
}

.backImg {
  height: 100%;
}
.backImg img {
  width: 36px;
  height: 36px;
  margin-top: 6px;
}
.active {
  color: var(--color-high-text);
}
</style>