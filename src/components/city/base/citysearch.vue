<template>
  <div class="search">
    <input
      type="text"
      class='header-input'
      placeholder='请输入城市名和拼音'
      v-model="keywords">
      <div class="search-content" v-show="keywords" ref="wrapper">
        <ul>
          <li class='search-item border-bottom'
              v-for="city in filterCities"
              :key="city.id"
              @click="jump(city.name)">{{city.name}}</li>
          <li v-if="isShow" class='search-item border-bottom'>未匹配到数据</li>
        </ul>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'CitySearch',
  components:{},
  props:['cities'],
  data(){
    return {
        keywords:''
    }
  },
  computed:{
     filterCities(){
        const result = []
        for(let key in this.cities){
          this.cities[key].forEach((city,index)=>{
            if(city.name.includes(this.keywords)||city.spell.includes(this.keywords)){
              result.push(city)
            }
          })
        }
        return result
      },
      isShow(){
        return !this.filterCities.length
      }
  },
  methods:{
      jump(city){
          console.log('1');
          
          this.$store.commit('changecity',city)
          this.$router.push('/')
      }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true
    })
  }
}
</script>
<style lang='stylus' scoped>
.border-bottom::before
  border-color:#aaa
.search
  position:relative
  height:.72rem
  padding:0.1rem
  background-color:#00bcd4
  .header-input
    width:100%
    height:100%
    border-radius:.1rem
    text-align:center
  .search-content
    position:fixed
    z-index:20
    overflow:hidden
    top:1.78rem
    left:0
    right:0
    bottom:0
    background-color:#ccc
    .search-item
      line-height:.8rem
      padding-left:.2rem
      background-color:#fff
</style>