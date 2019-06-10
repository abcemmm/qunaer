<template>
  <div class="swiper">
    <swiper :options="swiperOption" >
      <!-- slides -->
      <swiper-slide v-for="(item,index) in swiperList" :key="index">
        <img
          class="swiper-image"
          :src="item.imgUrl"
          alt
        >
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  components: {},
  props:['swiperList'],
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: true,
        loop:true
      },
    };
  },
  watch: {},
  computed: {
    // isShow(){
    //   return this.swiperList.length > 0
    // }
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang='stylus'>
.swiper >>> .swiper-pagination-bullet-active {
  background-color: #fff;
}

.swiper {
  height: 2.19rem;

  .swiper-container {
    height: 100%;
  }

  .swiper-image {
    width: 100%;
  }
}
</style>