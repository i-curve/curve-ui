<template>
  <div class="container">
    <cu-selector
      placeholder="请选择框架"
      :data="selectorData"
      @setItemValue="setItemValue"
      @searchOptions="searchOptions"
    />
  </div>
</template>

<script>
import selectorData from '../data/selector'
export default {
  name: 'Selector',
  setup() {
    const setItemValue = () => {

    }
    const searchOptions = (value) => {

    }
    return {
      selectorData,
      setItemValue,
      searchOptions
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 500px;
  height: 1000px;
  margin: 200px auto;
}
</style>