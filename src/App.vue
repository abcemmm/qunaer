<template>
  <div id="home">
    <!-- 内部组件被缓存 -->
    <keep-alive> 
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name:'Home',
  data(){
    return{

    }
  }
}
</script>

<style>

</style>
