<template>
  <div class="btn-wrap">
    <button
      :class="[
        btnType
      ]"
      :style="{
        width: width + 'px',
        height: height + 'px',
        borderRadius: round ? height / 2 + 'px':'4px',
        fontSize: fontsize + 'px',
      }"
      @click="btnClick"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'CuButton',
  props: {
    type: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 98
    },
    height: {
      type: Number,
      default: 39.6
    },
    round: Boolean,
    fontsize: {
      type: Number,
      default: 14
    }
  },
  setup(props, ctx) {
    const state = reactive({
      btnType: props.type
    })
    const btnClick = () => {
      ctx.emit('btnClick')
    }
    return {
      btnClick,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-wrap {
  display: inline-block;

  button {
    border: 1px solid #dcdfe6;
    border-color: #dcdfe6;
    background-color: #fff;
    cursor: pointer;
    outline: none;
    transition: all .1s;
  }
  button:hover {
    background-color: #ecf5ff;
    color: #409eff;
    border-color: #ecf5ff;
  }
  button:focus {
    box-shadow: 0 0 2px;
  }
  .primary {
    background-color: #409eff;
    border-color: #409eff;
    color: #fff;
    &.primary:hover {
      background-color: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
  }
  .success {
    background-color: #67c23a;
    border-color: #67c23a;
    color: #fff;
    &.success:hover {
      background-color: #85ce61;
      color: #fff;
      border-color: #85ce61;
    }
  }
  
  .warning {
    background-color: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
    &.warning:hover {
      background-color: #ebb563;
      border-color: #ebb563;
      color: #fff;
    }
  }

  .danger {
    background-color: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
    &.danger:hover {
      background-color: #f78989;
      border-color: #f78989;
      color: #fff;
    }
  }
}
</style>