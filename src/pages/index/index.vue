<template>
  <div id="app">
    <a href="cell.html">cell</a>
    <router-view></router-view>
  </div>
</template>

<script>
  import HelloWorld from "@/components/HelloWorld";
  export default {
    name: 'app',
    components : {
          HelloWorld
      }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
