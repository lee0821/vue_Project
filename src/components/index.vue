<template>
  <div class="container">
    <router-view></router-view>
    <div class="router-link">
      <router-link to="/index/sub">第一个子路由</router-link>
      <router-link to="/index/subTwo">第二个子路由</router-link>
      <a @click="gotoThirdPage">点击事件跳转路由</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    console.log(11111, this.$route)
  },
  methods: {
    gotoThirdPage() {
      this.$router.go('./index/sub-third')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 80vh;
  border: 1px solid #f00;
}
</style>
