<template>
  <div>
    <div class="banner" @click="hidden">
      <img class="banner-img" :src="bannerImg"  >
      <div class="banner-info">
        <span class="banner-title">{{sightName}}</span>
        <p class="banner-number">
          <i class="iconfont icon-tupian"></i>
          <span>{{gallaryImgs.length}}</span>
        </p>
      </div>
    </div>
    <fade-animation>
       <common-gallary @close='hiddenclose' v-show="isshow" :gallaryImgs='gallaryImgs'></common-gallary>
    </fade-animation>
   
  </div>
</template>

<script>
import CommonGallary from '@/common/Gallary'
import FadeAnimation from '@/common/FadeAnimation'
export default {
  name: "DetailBanner",
  props:['sightName','bannerImg','gallaryImgs'],
  data() {
    return {
        isshow:false
    };
  },
  methods:{
      hidden(){
          this.isshow=true
      },
      hiddenclose(){
          this.isshow=false
      }
  },
  components:{
      CommonGallary,
      FadeAnimation
  }
};
</script>
<style lang='stylus' scoped>
.banner
    position:relative
    height:0
    padding-bottom:55%
    overflow hidden
    .banner-img
        width: 100%
    .banner-info
        position: absolute
        left: 0
        right: 0
        bottom: 0
        color: #fff
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))
        line-height: 0.6rem
        .banner-title
            font-size: 0.32rem
            padding: 0 0.2rem
        .banner-number
            position: absolute
            right: 0
            top: 0
            height: 0.36rem
            line-height: 0.36rem
            margin-top: 0.14rem
            padding: 0 0.4rem
            border-radius: 0.2rem
            background: rgba(0, 0, 0, 0.8)
            font-size: 0.24rem
</style>