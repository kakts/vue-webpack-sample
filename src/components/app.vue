<template>
  <div id='wrap'>
    <top></top>
    <inner></inner>
    <bottom></bottom>
    <inputForm></inputForm>
    ----router----
    <router-link to="inputForm">Go to inputForm</router-link>
    <router-link to="button">Go to todoList</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import inner from './inner'
import top from './top'
import right from './right'
import left from './left'
import bottom from './bottom'
import inputForm from './inputform'

export default {
  components: {
    inner,
    top,
    right,
    left,
    bottom,
    inputForm
  }
}
</script>

<style>
body {
  text-align: center;
}
#wrap {
  width: auto;
  margin: 0 auto;
}
</style>