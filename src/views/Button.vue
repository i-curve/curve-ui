<template>
  <cu-button
    :round="round"
    :circle="circle"
    :icon="icon"
    @btnClick="btnClick"
  >默认按钮</cu-button>
  <cu-button
    type="primary"
  >
    主要按钮
  </cu-button>
  <cu-button
    type="success"
  >
    成功按钮
  </cu-button>
  <cu-button
    type="warning"
  >
    警告按钮
  </cu-button>
  <cu-button
    type="danger"
  >
    危险按钮
  </cu-button>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'Button',
  setup() {
    const state = reactive({
      type: 'primary',   // 类型有primary, success, danger, info, text
      round: false,   //是否圆角
      circle: false,
      icon: '',  //图标类名
    })
    const btnClick = () => {
      console.log('默认按钮')
    }
    return {
      btnClick,
      ...toRefs(state)
    }
  }
}
</script>

<style>

</style>