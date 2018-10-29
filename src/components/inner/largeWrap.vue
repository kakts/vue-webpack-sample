<template>
  <div id="largeWrap">
    <mainWrap></mainWrap>
    <sideAlphaWrap></sideAlphaWrap>
     <div class="clear"><hr /></div> 
  </div>
</template>
<script>
import mainWrap from './mainWrap'
import sideAlphaWrap from './sideAlphaWrap'
export default {
  data: function() {
    return {
      info: 'largeWrap!'
    }
  },
  components: {
    mainWrap,
    sideAlphaWrap
  }
}
</script>
<style>
#largeWrap {
  float: left;
  width: 630px;
  background-color: red;
}
</style>
