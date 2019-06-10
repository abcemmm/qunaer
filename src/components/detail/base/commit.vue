<template>
  <div class="comment">
      <h3 class="border-bottom">用户评论</h3>
      <div class="comment-container border-bottom" v-for='(commit,index) in commentInfo' :key="index">
          <p class="comment-desc">{{commit.desc}}</p>
          <div class="comment-item" @click="handleClick(commit)">
              <img :src="item" alt="" v-for="(item,index) in commit.imgs" :key='index' v-if='index<6' class="comment-img">
              <span class="img-amount" v-if="commit.imgs.length>6">共{{commit.imgs.length}}张</span>    
          </div>
          <common-gallary v-if="commit.isShow" :gallaryImgs='commit.imgs' @close='handlClose(commit)'></common-gallary>  
      </div>
  </div>
</template>

<script>
import CommonGallary from '@/common/Gallary'
export default {
  name:'DetailCommit',
  props:['commentInfo'],
  components:{
      CommonGallary
  },
  methods:{
      handleClick(commit){
          commit.isShow = true
      },
      handlClose(commit){
          commit.isShow = false
      }  
  }
}
</script>
<style lang='stylus' scoped>
.border-bottom::before
    border-color:#ccc
h3
    line-height:.8rem
    padding-left:.3rem
    font-size:.3rem
.comment-container
    padding:0 .2rem .4rem
    line-height: .42rem
    font-size: .26rem
    color: #616161
.comment-desc
    overflow:auto
    height:2rem
    padding:.2rem 0
.comment-item
    position:relatives
    overflow: hidden
    .comment-img
        float:left
        width:32%
        margin-right:1.2%
        margin-bottom:1.2%
    .img-amount
        position:absolute
        right:.1rem
        bottom:.3rem
        padding:0 .05rem
        font-size:.28rem
        color:#fff
        border-radius:.2rem 0 0 .2rem
        background-color:rgba(0,0,0,.5)    
</style>