<template>
  <div id="app">
  	<keep-alive exclude="detail">    <!--除了detail页面外缓存-->
    	<router-view/>    <!--显示当前路由地址所对应的内容-->
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style lang="scss">

</style>
