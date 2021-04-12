<template>
  <div class="dot-wrapper" v-if="hasDot">
    <div 
      class="dot-item"
      v-for="item in itemLen"
      :key="item"
      @click="setIndex(item - 1)"
    >
      <a href="javascript:;"
        class="dot-lk"
        :style="{backgroundColor: item-1===currentIndex? '#000':''}"
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dot',
  props: {
    hasDot: Boolean,
    itemLen: Number,
    currentIndex: Number
  },
  setup(props, ctx) {
    const setIndex = (index) => {
      ctx.emit("dotClick", index)
    }
    return {
      setIndex
    }
  }
}
</script>

<style lang="scss" scoped>
  .dot-wrapper {
    width: 70px;
    height: 13px;
    border-radius: 10px;
    position: absolute;
    bottom: 15px;
    text-align: center;
    font-size: 0;
    left: 50%;
    z-index: 1;
    margin-left: -39px;
    background-color: rgba(255,255,255,.3);

    .dot-item {
      display: inline-block;
      margin: 3px;

      .dot-lk {
        display: block;
        padding-top: 8px;
        width: 8px;
        height: 0;
        border-radius: 50%;
        background: #fff;
      }
    }
  }
</style>