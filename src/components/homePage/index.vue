<template>
  <div class="sub-container tracking-in-expand">
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
  .tracking-in-expand {
    -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
            animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  }
  @-webkit-keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }

</style>
