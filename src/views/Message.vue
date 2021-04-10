<template>
  <cu-message
    content="this is content"
    @changeStatus="change"
  />
</template>

<script>
export default {
  name: 'Message',
  setup() {
    const change = () => {

    }
    return {
      change
    }
  }
}
</script>

<style>

</style>