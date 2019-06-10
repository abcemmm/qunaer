<template>
  <div class="header" >
      <router-link class="header-goback iconfont icon-fanhui" v-show="isshow" tag='i' to='/'>

      </router-link>
      <div class="header-fixed" v-show="!isshow"  :style='styleObj'>
          <router-link tag='i' to='/' class="iconfont icon-fanhui header-back"></router-link>
          <h2>景点详情</h2>
      </div>
  </div>
</template>

<script>
export default {
  name:'DetailHeader',
  components:{},
  props:{},
  data(){
    return {
        isshow:true,
        styleObj:{}
    }
  },
 methods:{
    handleScroll(){
        let scrollTop = document.documentElement.scrollTop
        if(scrollTop>40){
          this.isshow = false
          this.styleObj = {
            opacity:(scrollTop-40)/100
          }
        }else{
          this.isshow =  true
        }

      }
    },
    activated(){
      window.addEventListener('scroll',this.handleScroll)
    },
    deactivated(){
      window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>
<style lang='stylus' scoped>
    .header
        position fixed
        top 0
        left 0
        right 0
        z-index 1   
        .header-goback
            position:absolute
            width: .8rem
            height: .8rem
            line-height: .8rem
            border-radius: 50%
            text-align: center
            background: rgba(0, 0, 0, .8)
            color:#fff
        .header-fixed
            position:relative
            background:#00bcd4
            line-height:.86rem
            color:#fff
            text-align:center
            .header-back
                position:absolute
                left:0
                top:0
                width:.8rem
                color:#fff
            h2
            text-align:center
            font-size:.32rem
</style>