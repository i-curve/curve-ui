<template>
<!-- 608 760 -->
  <div class="container">
    <cu-magnifier
      imgUrl="https://ae01.alicdn.com/kf/U83afa4f727ce4b6f9f4e9cea3a3ce340o.jpg"
      :width="500"
      :height="625"
      :magWidth="100"
      :magHeight="100"
      :SScale="1.5"
      alt="美女"
    />
  </div>
</template>

<script>
// 608, 760
// 500 625
export default {
  name: 'Magnifier',
}
</script>

<style lang="scss" scoped>
.container {
  width: 500px;
  margin: 10px auto;
  background-color: #000;
}
</style>