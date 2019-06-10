<template>
  <div class="letter">
      <ul>
          <li v-for="(city,key) in cities" :key="city.id" @click="jump(key)">{{key}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name:'CityLetter',
  components:{},
  props:['cities'],
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{
      jump(letter){
          //console.log(1);
          this.$store.commit('changeletter',letter)
      }
  },
  created(){},
  mounted(){}
}
</script>
<style lang='stylus' scoped>
    .letter
        position fixed
        display flex
        flex-direction column
        justify-content center
        top 0
        right 0
        bottom 0
        width .4rem
        ul
            position fixed
            bottom 0
        li
            line-height .5rem
            text-align center
            color #666
            font-weight 600
</style>