<template>
  <div class="selector-menu">
    <div 
      class="menu-item"
      v-for="(item, index) of searchData"  
      :key="index"
      @click="setItemValue(item)"
    >
      {{item.text}}
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
export default {
  name: 'SelectorMenu',
  props: {
    searchValue: String,
    data: {
      type: Array,
      default: [
        {
          id: 1,
          value: '1',
          text: '选项1'
        }
      ]
    }
  },
  setup(props, ctx) {
    const searchData = ref([])

    onMounted(() => {
      searchData.value = props.data
    })

    watch(() => {
      return props.searchValue
    },(value) => {
      filterData(value)
    })
    const setItemValue = (item) => {
      ctx.emit('setItemValue', item)
    }
    const filterData = (value) => {
      searchData.value = props.data.filter((item) => {
        return item.text.toLowerCase().includes(props.searchValue.toLowerCase())
      })
    }
    return {
      searchData,
      setItemValue
    }
  }
}
</script>

<style lang="scss" scoped>
  .selector-menu {
    display: none;
    position: absolute;
    left: 0;
    top: 48px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    border-radius: 5px;
    cursor: pointer;
    
    .menu-item {
      height: 35px;
      text-align: center;
      line-height: 35px;
      font-size: 14px;
      color: #666;
      margin: 10px 0;
      transition: background-color .2s linear;

      &:hover {
        background-color: #ededed;
      }
    }
  }
</style>