<template>
  <div class="detail">
    <detail-banner :bannerImg='bannerImg' :sightName='sightName' :gallaryImgs='gallaryImgs'></detail-banner>
    <detail-header></detail-header>
    <detail-card :cardInfo='cardInfo'></detail-card>
    <detail-recommend :recommendInfo='recommendInfo'>
        <h3 class="border-bottom">去哪儿推荐</h3>
    </detail-recommend>
    <detail-calendar :calendarInfo='calendarInfo'></detail-calendar>
    <detail-commit :commentInfo='commentInfo'></detail-commit>
  </div>
</template>

<script>
import { getDetail } from "@/api";
import DetailBanner from "./base/banner"
import DetailHeader from './base/header'
import DetailCard from './base/card'
import DetailRecommend from './base/recommend'
import DetailCalendar from './base/calendar'
import DetailCommit from './base/commit'

export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailCard,
    DetailRecommend,
    DetailCalendar,
    DetailCommit
  },
  props: {},
  data(){
      return {
          bannerImg:'',
          sightName:'',
          gallaryImgs:[],
          cardInfo:[],
          recommendInfo:[],
          calendarInfo:[],
          commentInfo:[]
      }
  },      
  activated(){
      this.getData()
  },
  methods:{
      async getData(){
        let heaven = await getDetail(this.$route.params.id)
        let {bannerImg,sightName,gallaryImgs,cardInfo,recommendInfo,calendarInfo,commentInfo} = await getDetail(this.$route.params.id)
        this.bannerImg = bannerImg
        this.sightName = sightName
        this.gallaryImgs = gallaryImgs
        this.cardInfo = cardInfo
        this.recommendInfo = recommendInfo
        this.calendarInfo = calendarInfo
        this.commentInfo = commentInfo
        console.log(heaven)
      }
      
      
  }
};
</script>
<style lang='stylus' scoped>
    .detail
        height 2000px
</style>