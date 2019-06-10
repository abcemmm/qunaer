<template>
  <div class="gallary" @click="hidden">
    <div class="wrapper" >
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in gallaryImgs" :key="index">
            <img :src="item" alt="" class="swiper-img" >
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>  
    </div>
  </div>
</template>

<script>
export default {
  name:'CommonGallary',
  components:{},
  props:['gallaryImgs'],
  data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            },
            observer:true,
            observeParents:true,
        }
        
      }
    },
  watch:{},
  computed:{},
  methods:{
    hidden(){
      this.$emit('close')
    }
  },
  created(){},
  mounted(){}
}
</script>
<style lang='stylus' scoped>
.wrapper >>> .swiper-container
    overflow:inherit
  .gallary
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background-color #000
    z-index 20
    .wrapper
      position absolute
      top 0
      bottom 0
      margin auto
      width 100%
      height 0
      padding-bottom 65%
      background-color #fff
      .swiper-img
        width 100%
      .swiper-pagination
        bottom -1rem
        color #ffffff  
</style>