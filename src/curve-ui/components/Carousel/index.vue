<template>
  <div class="carousel">
    <dot
      :hasDot="hasDot"
      :itemLen="itemLen"
      :currentIndex="currentIndex"
      @dotClick="dotClick"
    />
    <director 
      v-if="hasDirector"
      :pre="true" 
      @setPrev="setPrev"
      
    />
    <slot/>
    <director 
      v-if="hasDirector"
      :next="true" 
      @setNext="setNext"
    />
  </div>
</template>

<script>
import { getCurrentInstance, onBeforeUnmount, onMounted, reactive, toRefs } from 'vue'
import Dot from './dot.vue'
import Director from './director.vue'

export default {
  name: 'CuCarousel',
  props: {
    autoplay: {
      type: Boolean,
      default: true
    },
    director: {
      type: String,
      default: 'next'
    },
    time: {
      type: Number,
      default: 300
    },
    initial: {
      type: Number,
      default: 0
    },
    hasDot: {
      type: Boolean,
      default: true
    },
    hasDirector: {
      type: Boolean,
      default: true
    }
  },
  components: {
    Dot,
    Director
  },
  setup(props) {
    const instance = getCurrentInstance()
    const state = reactive({
      currentIndex: props.initial - 1,
      itemLen: 0,
    })
    let t = null
    
    const autoPlay = () => {
      if (props.autoplay) {
        t = setInterval(() => {
          if (props.director === 'pre') {
            setIndex('pre')
          } else {
            setIndex('next')
          }
        }, props.time)
      }
    }
    const setIndex = (dir) => {
      switch (dir) {
        case 'next':
          state.currentIndex += 1
          if(state.currentIndex >= state.itemLen) {
             state.currentIndex = 0
          } 
          break
        case 'pre':
          state.currentIndex -= 1
          if(state.currentIndex < 0) {
            state.currentIndex = state.itemLen - 1
          }
          break
        default:
          break
      }
    }
    const dotClick = (index) => {
      state.currentIndex = index
    }
    onMounted(() => {
      state.itemLen = instance.slots.default()[0].children.length
      autoPlay()
    })
    onBeforeUnmount(() => {
      clearInterval(t)
      t = null
    })

    const setPrev = () => {
      if (state.currentIndex === 0) {
        state.currentIndex = state.itemLen - 1
      } else {
        state.currentIndex -= 1
      }
    }
    const setNext = () => {
      if (state.currentIndex === state.itemLen - 1) {
        state.currentIndex = 0
      } else {
        state.currentIndex += 1
      }
    }
    return {
      dotClick,
      setPrev,
      setNext,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>