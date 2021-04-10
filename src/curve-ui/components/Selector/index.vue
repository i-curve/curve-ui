<template>
  <div class="selector"  v-focus>
    <SelectorInput
      :placeholder="placeholder"
      :value="inputValue"
      @searchOptions="searchOptions"
    />
    <selector-menu
      :data="data"
      @setItemValue='setItemValue'
      :searchValue='searchValue'
    />
  </div>
</template>

<script>
import SelectorInput from './input.vue'
import SelectorMenu from './menu.vue'

import focus from '../../directives/focus'
import { reactive, toRefs } from 'vue'

export default {
  name: 'CuSelector',
  props: {
    placeholder: String,
    data: Array
  },
  components: {
    SelectorInput,
    SelectorMenu
  },
  directives:{
    focus
  },
  setup(props, ctx) {
    const state = reactive({
      inputValue: '',
      searchValue: ''
    })
    const setItemValue = (item) => {
      state.inputValue = item.text
      ctx.emit('setItemValue', item.value)
    }
    const searchOptions = (value) => {
      state.searchValue = value
    }
    return {
      setItemValue,
      searchOptions,
      ...toRefs(state)
    }
  }
}
</script>
<style lang="scss" scoped>
.selector {
  position: relative;
  width: 300px;
}
</style>