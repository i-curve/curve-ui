<template>
  <div class="container">
    <!-- <img :src="require('../assets/img/1.jpg')" alt=""> -->
    <cu-carousel
      :autoplay="true"
      :time="3000"
      director="pre"
      :initial="1"
      :hasDot="true"
      :hasDirector="true"
    >
      <cu-carousel-item
        v-for="(item, index) of srcData"
        :key="index"
      >
        <img :src="require(`../assets/img/${item.img_name}`)" alt="">
      </cu-carousel-item>
    </cu-carousel>
  </div>
</template>

<script>
import srcData from '../data/carousel'
export default {
  name: "Carousel",
  setup() {
    return {
      srcData
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 520px;
  height: 280px;
  margin: 100px auto;
}
</style>