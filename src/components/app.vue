<template>
  <div id='wrap'> App s s
    <p> data </p>
    <top></top>
    <inner></inner>
    <bottom></bottom>
  </div>
</template>

<script>
import inner from './inner'
import top from './top'
import right from './right'
import left from './left'
import bottom from './bottom'

export default {
  components: {
    inner,
    top,
    right,
    left,
    bottom
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: brown;
}
#wrap {
  width: 780px;
  text-align: left;
  margin: 0 auto;
}
</style>