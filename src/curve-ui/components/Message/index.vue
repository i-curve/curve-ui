<template>
  <div class="message" v-show="status">
    <span @click="shudown">x</span>
    <header class="title" v-if="title.length > 0">
      <h1>{{title}}</h1>
    </header>
    <article class="content">
      <p>{{content}}</p>
    </article>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'CuMessage',
  props: {
    status: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    time: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const status = ref(props.status),
          time = parseInt(props.time)
    const shudown = () => {
      status.value = false
    }
    if (time > 0) {
      setTimeout(() => {
        status.value = false
      }, props.time)
    }
    return {
      status,
      shudown
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  position: fixed;
  top: 5%;
  left: 50%;
  width: 500px;
  margin-left: -250px;
  background-color: #EDF2FC;
  transition: all .3s;
  .title {
    padding-left: 30px;
    line-height: 30px;
    border-bottom: 1px solid #EDF2FC;
    h1 {
      font-weight: normal;
      font-size: 14px;
    }
  }
  .content {
    display: inline-block;
    padding-left: 30px;
    font-size: 12px;
    line-height: 25px;
  }
  span {
      position: absolute;
      right: 15px;
      top: 12px;
      cursor: pointer;
    }
}
</style>