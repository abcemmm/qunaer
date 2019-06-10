<template>
  <div class="">
      <city-header></city-header>
      <city-search :cities='cities'></city-search>
      <city-list :hotCities='hotCities' :cities='cities'></city-list>
      <city-letter :cities='cities'></city-letter>
  </div>
</template>

<script>
import {getCity} from '@/api'

import CityHeader from './base/cityheader'
import CitySearch from './base/citysearch'
import CityList from './base/citylist'
import CityLetter from './base/letter'
export default {
  name:'City',
  components:{
      CityHeader,
      CitySearch,
      CityList,
      CityLetter
  },
  props:{},
  data(){
    return {
      hotCities:[],
      cities:[]
    }
  },
  watch:{},
  computed:{},
  created(){
    this.getData()
    // getCity.then(res=>{
    //   console.log(res)
    // })
  },
  methods:{
    async getData(){
      let {hotCities,cities} = await getCity()
      this.hotCities = hotCities
      this.cities = cities
    }
  },
  mounted(){}
}
</script>
<style scoped>
</style>