<template>
  <div>
    <img src="~assets/img/back-top.png"
         alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop'
}
</script>

<style scoped>
img {
  position: fixed;
  right: 6px;
  bottom: 55px;
  width: 38px;
  height: 38px;
  z-index: 999;
}
</style>