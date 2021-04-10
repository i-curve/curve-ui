<template>
  <div class="selector-input">
    <label class="placeholder"> {{placeholder}}</label>
    <input 
      type="text"
      class="input"
      ref="inputValue"
      :value="value"
      @input="searchOptions"
      @blur="setValue(value)"
    />
    <span class="iconfont icon-arrow-down"></span>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted, ref } from 'vue'
export default {
  name: 'SelectorInput',
  props: {
    placeholder: {
      type: String,
      default: '请选择'
    },
    value: {
      type: String,
      default: '',
    }
  },
  directives: {
    focus
  },
  setup(props, ctx) {
    const inputValue = ref(null)
    const instance = getCurrentInstance()

    const searchOptions = (e) => {
      ctx.emit('searchOptions', e.target.value)
    }
    onMounted(() => {
console.log(inputValue,instance)
    })
    const setValue = (value) => {
      // const _input = instance.refs.inputValue

      // if (_input.value.length > 0) {
      //   _input.value = value
      // }
            // console.log(inputValue,instance.refs)
      // console.log(inputValue.value, instance.refs.inputValue)
      // console.log(inputValue.value.value, instance.refs.inputValue.value)
      const _input = inputValue.value

      if (_input.value.length > 0) {
        _input.value = value
      }
    }
    return {
      searchOptions,
      inputValue,
      setValue
    }
  }
}
</script>

<style lang="scss" scoped>
  .selector-input {
    position: relative;
    width: 100%;
    height: 38px;

    .input {
      width: 100%;
      height: 100%;
      padding: 0 15px;
      box-sizing: border-box;
      background-color: #fff;
      border: 1px solid #999;
      border-radius: 5px;
      outline: none;
      transition: all .2s linear;

      &:focus {
        border-color: #1890ff;
        box-shadow: 0 0 3px #1890ff;
      }
    }

    .placeholder,
    .iconfont {
      position: absolute;
    }

    .placeholder {
      left: 15px;
      top: 8px;
      color: #999;
    }

    .iconfont {
      right: 15px;
      top: 12px;
      color: #999;

      &.icon-search {
        font-size: 22px;
        top: 8px;
      }
    }
  }
</style>