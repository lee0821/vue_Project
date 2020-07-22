<template>
  <div class="sub-container">
    这是第二个子路由<br>
    该页面访问次数: {{ count }}
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {
    count() {
      return this.$store.state.countSec
    }
  },
  mounted() {
    this.$store.commit('cacluateCount')
  }
}
</script>
<style lang="scss" scoped>
  .sub-container {
    width: 80%;
    height: 20vh;
    text-align: center;
    padding-top: 50px;
    font: 40px 600;
    border: 1px solid green;
    margin: 0 auto;
  }
</style>
