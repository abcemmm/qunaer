<template>
  <div class="week">
      <week-header></week-header>
      <week-list :weekInfo='weekInfo'></week-list>
  </div>
</template>

<script>
import {getWeeks} from '@/api'

import WeekHeader from './base/header'
import WeekList from './base/list'
export default {
  name:'week',
  components:{
      WeekHeader,
      WeekList
  },
  data(){
    return {
        weekInfo:[]
    }
  },
  activated(){
      this.getData()
  },
  methods:{
       async getData(){
        let {weekInfo} = await getWeeks(this.$route.params.id)
        this.weekInfo = weekInfo
      }
  }
}
</script>
<style scoped>
</style>