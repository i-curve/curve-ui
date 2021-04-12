<template>
  <div class="director pre" v-if="pre"
    @click="setPrev"
  >
    <a href="javascript:;">
      &lt;
    </a>
  </div>
  <div class="director next" v-else-if="next"
    @click="setNext"
  >
    <a href="javascript:;">
      &gt;
    </a>
  </div>
</template>

<script>
export default {
  name: 'director',
  props: {
    pre: Boolean,
    next: Boolean
  },
  setup(props, ctx) {
    const setPrev = () => {
      ctx.emit('setPrev')
    }
    const setNext = () => {
      ctx.emit('setNext')
    }
    return {
      setPrev,
      setNext
    }
  }
}
</script>

<style lang="scss" scoped>
.director {
  position: absolute;
  height: 30px;
  width: 20px;
  z-index: 2;
  background-color: rgba(0,0,0,.3);
  top: 50%;

  a {
    line-height: 30px;
    text-decoration: none;
    color: #fff;
  }
  &.pre {
    left: 0;
    margin-top: -15px;
  }
  &.next {
    right: 0;
    margin-top: -15px;
  }
}
</style>