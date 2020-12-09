<template>
<q-img
  :src="src"
  :width="width+unit"
  :height="height+unit"
  :class="round ? 'round' : ''"
  />
</template>

<script>
export default {
  name: "AvatarComponent",
  props: {
    src: '',
    width: '',
    height: '',
    round: false,
    unit: ''
  }
}
</script>

<style scoped>

</style>
