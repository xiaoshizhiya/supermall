<template>
  <div class="tab-control">
    <div class="tab-control-item"
         v-for="(item, index) in title"
         :key="item"
         :class="{active: currentIndex === index}"
         @click="tabChange(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabChange (index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 14px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
  height: 44px;
  line-height: 44px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-high-text);
  padding: 5px;
}
</style>