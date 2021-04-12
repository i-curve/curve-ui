<template>
  <transition>
    <div ref="dom" class="carousel-item" v-if="selfIndex === currentIndex">
      <slot />
    </div>
  </transition>
</template>

<script>
import {
  getCurrentInstance,
  reactive,
  toRefs,
  watch,
} from "vue";
export default {
  name: "CuCarouselItem",
  setup() {
    const instance = getCurrentInstance();
    const state = reactive({
      selfIndex: instance.vnode.key,
      currentIndex: instance.parent.ctx.currentIndex,
    });
    watch(
      () => {
        return instance.parent.ctx.currentIndex;
      },
      (newValue) => {
        state.currentIndex = newValue;
      }
    );
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.v-enter-active,
.v-leave-active {
  transition: all .3s linear;
}

.v-enter-from {
  transform: translateX(100%);
}
.v-enter-to {
  transform: translateX(0);
}
.v-leave-from {
  transform: translateX(0);
}
.v-leave-to {
  transform: translateX(-100%);
}
</style>