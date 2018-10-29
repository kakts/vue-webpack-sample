<template>
  <div id="sideBetaWrap">
    sideBeta
    <div v-for="n in 10">
      <p>{{ info }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      info: 'sideBetaWrap!'
    }
  }
}
</script>
<style>
#sideBetaWrap {
  float: right;
  width: 120px;
  background-color: blue;
}
</style>
