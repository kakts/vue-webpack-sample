<template>
  <div id="mainWrap">
    mainWrap
    <div v-for="n in 10">
      <p>{{ info }}</p>
    </div>

    {{abc}}
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      info: 'mainWrap',
      abc: 0
    }
  },
  mounted: function() {
    setInterval(() => {
      console.log('-------');
      
      this.abc += 1;
    }, 1000);
  }
}
</script>

<style>
#mainWrap {
  float: right;
  width: 460px;
}
</style>