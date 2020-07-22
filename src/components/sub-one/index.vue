<template>
  <div class="sub-container">
    这是第一个子路由<br>
    该页面访问次数： {{ count }}
    另一页面访问次数： {{ countSec }}<br>
    统计 {{ total }}
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['countSec']),
    ...mapGetters(['total']),
    count() {
      return this.$store.state.countOne
    }
  },
  mounted() {
    this.$store.state.countOne += 1
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
    border: 1px solid #0082f0;
    margin: 0 auto;
  }
</style>
