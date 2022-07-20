<template>
  <div id="hoge">
    <div class="image">
      <img src="./assets/logo.png">
    </div>
    <div class="link">
      <router-link to="/">top</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/info">info</router-link>
    </div>
    <div class="content">
      <router-view/>
    </div>
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
