<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="@/assets/images/homepage/animation-bg.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>
    <!-- <router-link class="link" to="/">to index</router-link>
    <router-link class="link" to="/second">to second</router-link> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {

    }
  },
  computed: {
    routeData: () => {
      console.log(11111, this)
      return this.$router
    }
  }
}
</script>

<style>
@import url(./assets/style/animation.css);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
a {
  display: block;
}
</style>
