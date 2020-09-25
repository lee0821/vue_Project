<template>
  <div class="container">
    <router-view v-if="mainVisible"></router-view>
    <!-- <el-menu
      class="el-menu-demo"
      mode="horizontal"
      :default-active="active"
      text-color="#efefef"
      active-text-color="#FFD04B"
      background-color="#1E1F1C"
      @select="handleNavigate">
      <el-menu-item v-for="(item, index) in menus" :key="index" :index="index">{{ item.title }}</el-menu-item>
    </el-menu> -->
    <div class="animation-mask" ref="mask" :class="mainVisible ? 'animation-hide' : ''">
      <!-- <el-image class="mask-bg" src="../assets/images/homepage/animation-bg.png"></el-image> -->
      <!-- <el-image class="mask-bg" :src="bgImg"></el-image> -->
      <!-- <el-image class="mask-bg" :src="`./animation-bg.png?t=${ time }`"></el-image> -->
      <div class="mask-fonts">文字测试233333</div>
      <el-button round class="stop-animation" @click="handleStop">
        开始浏览
        <i class="el-icon-right"></i>
      </el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: '1',
      mainVisible: false,
      menus: [
        {title: '首页', path: '1'},
        {title: '日记', path: '2'},
        {title: 'music', path: '3'},
        {title: '视频', path: '4'},
        {title: '知乎', path: '5'},
        {title: 'B站', path: '6'},
        {title: '其他待开发', path: '7'},
      ],
      // bgImg: require(`../assets/images/homepage/animation-bg.png?t=${ Date.now() }`)
    }
  },
  mounted() {
    console.log(11111, this.$route)
  },
  methods: {
    handleNavigate(key, data) {
      console.log(key, data)
    },
    handleStop() {
      this.mainVisible = true
      this.$router.push('/index/sub')
      setTimeout(() => {
        console.log(this.$refs)
      }, 5000)
    },
  },
}
</script>

<style lang="scss" scoped>
.animation-hide {
  opacity: 0;
}
.container {
  width: 100%;
  height: 100vh;
  border: 1px solid #f00;
}
.animation-mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: #1BA784;
  top: 0;
  left: 0;
  transition: 0.8s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.mask-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.mask-fonts {
  color: #b0d5df;
  font-size: 200px;
  margin-top: 25vh;
  font-weight: 600;
  letter-spacing: 10px;
  user-select: none;
  
  -webkit-animation: tracking-in-expand 2s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
          animation: tracking-in-expand 2s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}
.stop-animation {
  margin-bottom: 100px;
  color: #aaa;
  background: linear-gradient(to right, #fff 30%, #77BEFC);
  border: #efefef;
  transition: all 1.5s;

  &:hover {
    color: #fff;
    background: linear-gradient(to right, #77BEFC 30%, #0082f0);
  }
}
</style>
