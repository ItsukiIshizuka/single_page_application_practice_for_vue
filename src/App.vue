<template>
  <div id="hoge">
    <img src="./assets/logo.png">
    <router-link to="/">top</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/info">info</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #hoge {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
