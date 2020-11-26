<template>
<div class="row">
  <div class="col-12">
    <span class="no-data">{{ msg }}</span>
  </div>
</div>
</template>

<script>
export default {
  name: "NoDataItems",
  props: {
    msg: ''
  }
}
</script>
