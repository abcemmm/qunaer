<template>
  <div class="list"  ref='wraper'>
      <div>
          <div class="list-current">
          <h3 class="list-title border-topbottom">当前城市</h3>
          <div class="city">
              <span>{{$store.state.city}}</span>
          </div>
      </div>
      <div class="list-current">
          <h3 class="list-title border-topbottom">热门城市</h3>
          <div class="city">
              <span v-for="(item,index) in hotCities" :key="index" @click="jump(item.name)">{{item.name}}</span>
          </div>
      </div>
       <div class="list-item" v-for="(city,key) in cities" :key="city.id">
          <h3 class="list-title border-topbottom" :ref="key">{{ key }}</h3>
          <ul>
              <li class="city-item border-bottom" v-for="(item,index) in city" :key="index" @click="jump(item.name)">{{item.name}}</li>
          </ul>
      </div>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'cityList',
  components:{},
  props:['hotCities','cities'],
  computed:{
      letter(){
        return this.$store.state.letter
      }
    },
  methods:{
      jump(city){
          console.log('跳转');
          
          this.$store.commit('changecity',city)
          this.$router.push('/')
      }
  },
  mounted(){
      //console.log(this.$refs.wraper)
      this.scroll = new BScroll(this.$refs.wraper,{
          click:true
      });
      
  },
  watch:{
      letter(value){
          //调到制定dom节点
          this.scroll.scrollToElement(this.$refs[value][0])
      }
  }
}
</script>
<style lang='stylus'  scoped>
    .border-bottom:before
        background-color #eee
    .list
        position fixed
        overflow hidden
        top 1.78rem
        left 0
        right 0
        bottom 0
        .list-title
            font-size 0.26rem
            line-height 0.54rem
            background-color #eeeeee
            padding-left 0.2rem
            color #666
        .city
            padding-left .15rem
            span 
                display inline-block
                width 28%
                padding .15rem .2rem
                margin .1rem
                border .01rem solid #cccccc
                text-align center
                box-sizing border-box
                border-radius .05rem
        .city-item
            line-height .8rem
            padding-left .2rem
</style>