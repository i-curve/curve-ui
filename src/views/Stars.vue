<template>
  <cu-stars
    :num="2"
    :size="16"
    @getStarNum="getStarNum"
  />
</template>

<script>
export default {
  name: 'Stars',
  setup() {
    const getStarNum = (num) => {
      // console.log(num)
    }
    return {
      getStarNum
    }
  }
}
</script>
