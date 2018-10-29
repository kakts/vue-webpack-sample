<template>
  <div id= 'inner'>inner! <br>
    <largeWrap></largeWrap>
    <sideBetaWrap></sideBetaWrap>
    <div class="clear"><hr /></div>
  </div>

</template>

<script>
import largeWrap from './inner/largeWrap'
import sideBetaWrap from './inner/sideBetaWrap'
export default {
  data: function() {
    return {
      info: null
    }
  },
  components: {
    largeWrap,
    sideBetaWrap
  }
}
</script>

<style>
#inner {
  margin: 0 10px;
}
.clear {
  clear: both;
}
.clear hr {
  display: none;
}
</style>
