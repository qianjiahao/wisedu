<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
  font-family: ZhiFont, ".SFNSText-Regular", "Helvetica Neue", Roboto, "Segoe UI", sans-serif;
}
</style>
