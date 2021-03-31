<template>
<!-- 测试git vscode -->
  <div class="home">
    <home-header></home-header>
    <div class="container" ref='wraper'>
      <div>
        <home-swiper :swiperList='swiperList'></home-swiper>
        <head-nav :imgsList='iconList'></head-nav>
        <head-favourite :favList='recommendList'></head-favourite>
        <home-weekend :weekendList='weekendList'></home-weekend>
      </div>
    </div>
  </div>
</template>

<script>
import {gethome} from '@/api'
import HomeHeader from './base/header'
import HomeSwiper from './base/swiper'
import HeadNav from './base/nav'
import HeadFavourite from './base/headfavourite'
import HomeWeekend from './base/weekend'

import BScroll from 'better-scroll'
export default {
  name:'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HeadNav,
    HeadFavourite,
    HomeWeekend
  },
  data(){
    return {
      iconList:[],
      recommendList:[],
      swiperList:[],
      weekendList:[]
    }
  },
  created(){
    // gethome().then(res=>{
    //   console.log(res)
    // })
    //this.getData()
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wraper,{
      click:true
    })
  },
  methods:{
    async getData(){
            let {iconList,recommendList,swiperList,weekendList} = await gethome()
            this.iconList = iconList
            this.recommendList = recommendList
            this.swiperList = swiperList
            this.weekendList = weekendList
          }
  },
  activated(){  //当组件被缓存时触发
    this.getData()
    console.log('home acticated');
    
  },
  deactivated(){
    console.log('home deacticated');
    
  }
  
}
</script>
<style lang='stylus' scoped>
    .container
      position fixed
      overflow hidden
      top .88rem
      left 0
      right 0
      bottom 0
</style>