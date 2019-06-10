<template>
  <div class="weekend">
    <h3 class="title">周末去哪儿</h3>
    <ul>
      <router-link class="item border-bottom" v-for="(item,index) in weekendList" :key="index" :to="{name:'weekLink',params:{id:item.id}}">
        <img :src="item.imgUrl" alt>
        <div class="item-text">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  components: {},
  props: ["weekendList"],
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang='stylus' scoped>
border-bottom:before {
  border-color: #777;
}

.title
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #ddd;
  text-indent: 0.2rem;
  font-size: 0.32rem;
.item img 
    width: 100%
.item-text
    padding: 0.14rem 0.2rem 0.2rem 0.2rem
    .item-title
        color: #212121
        font-size: 0.28rem
        line-height: 0.48rem
        overflow: hidden
        padding-right: 1.4rem
        white-space: nowrap
        text-overflow: ellipsis
    .item-desc
        color: #616161
        font-size: .24rem
        line-height: .42rem
        overflow: hidden
        padding-right: 1.4rem
        white-space: nowrap
        text-overflow: ellipsis
</style>