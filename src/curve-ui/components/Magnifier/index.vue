<template>
  <div class="magnifier" 
    v-magnifier
    :style="{
          width: width + 'px',
          height: height + 'px',
        }"
  >
    <div 
      class="mag-wrap"
      :style="{
        width: magWidth + 'px',
        height: magHeight + 'px',
        transform: `scale(${SScale})`
      }"  
    >
      <img 
        :src="imgUrl" 
        :style="{
          width: width + 'px',
          height: height + 'px',
        }"
        :alt="alt"
      />
    </div>
    <div class="img-static">
      <img 
        :src="imgUrl" 
        :alt="alt"
      />
    </div>
  </div>
</template>

<script>
import magnifier from '../../directives/magnifier'
export default {
  name: 'CuMagnifier',
  props: {
    imgUrl: String,
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 300
    },
    magWidth: {
      type: Number,
      default: 100
    },
    magHeight: {
      type: Number,
      default: 100
    },
    SScale: {
      type: Number,
      default: 1.5
    },
    alt: {
      type: String,
      default: ''
    }
  },
  directives: {
    magnifier
  }
}
</script>

<style lang="scss" scoped>
.magnifier {
  position: relative;
  border: 1px solid #ddd;
  box-shadow: 0 0 5px #999;

  .img-static, .img-static img {
    width: 100%;
    height: 100%;
  }
  .mag-wrap {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    overflow: hidden;
    background-color: #fff;
    cursor: pointer;

    img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>