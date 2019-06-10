<template>
  <div class="header">
       <router-link tag='i' to='/' class="iconfont icon-fanhui header-back"></router-link>
       <h2 class="h-title">城市选择</h2>
       <i class='h-right'></i>
  </div>
</template>

<script>
export default {
  name:'CityHeader',
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang='stylus' scoped>
    .header
        display flex
        height .88rem
        line-height .88rem
        background-color #00bcd4
        color #ffffff
        
        .header-back
            width: .8rem
            height: .88rem
            text-align center
            line-height: .88rem
        .h-right
            width: .8rem
            height: .88rem
        .h-title
            flex 1
            line-height: .88rem
            font-size: .32rem
            text-align: center
            color: #fff
</style>