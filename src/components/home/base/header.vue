<template>
  <div class='header'>
      <i class="iconfont icon-fanhui header-back"></i>
      <div class="header-input">
          <i class="iconfont icon-sousuo sousuo"></i>
          <input type="text" placeholder="输入城市/景点/游玩主题">
      </div>
      <router-link tag='div' to='/city' class="header-right">
          <span>{{$store.state.city}}</span>
          <i class="iconfont icon-jiantou"></i>
      </router-link>
  </div>
</template>

<script>
export default {
  name:'HomeHeader'
};
</script>
<style lang='stylus' scoped>
    .header
        display flex
        height .88rem
        line-height .88rem
        background-color #00bcd4
        justify-content space-around
        color #ffffff
        .header-back
            text-align center
        .header-input
            flex 1
            background-color #fff
            height .63rem
            line-height .63rem
            margin-top .12rem
            border-radius .1rem
        .sousuo
            color #cccccc
            vertical-align middle
        .input
            width 80%
            font-size .26rem
            vertical-align middle
        .header-right 
            padding 0 .15rem
</style>