<template>
  <div id="mainWrap">
    mainWrap
    <div v-for="n in 10">
      <p>{{ info }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      info: 'mainWrap'
    }
  }
}
</script>

<style>
#mainWrap {
  float: right;
  width: 460px;
}
</style>