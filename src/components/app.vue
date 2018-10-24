<template>
  <div id='container'> App s s
    <p> data </p>
    <top></top>
    <left></left>
    <right></right>
    <bottom></bottom>
  </div>
</template>

<script>
import top from './top'
import right from './right'
import left from './left'
import bottom from './bottom'

export default {
  components: {
    top,
    right,
    left,
    bottom
  }
}
</script>

<style scoped>
#container {
  display: block;
  height: 100%;
  width: 100%;
  background-color: brown;
}
#top {
  display: block;
  font-size: 100;
  height: 30%;
  width: 100%;
  background-color: blue;
  padding: 3px;
  box-sizing: border-box;
}
</style>