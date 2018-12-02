<template>
  <div id='wrap'>
    <top></top>
    <!--<inner></inner>-->

    <!--<inputForm></inputForm>-->
    <!--<router-link to="inner">Go to inputForm</router-link>
    <router-link to="button">Go to todoList</router-link>-->
    <router-view></router-view>
    <textview></textview>
    <bottom></bottom>
  </div>
</template>

<script>
import inner from './inner'
import top from './top'
import right from './right'
import left from './left'
import bottom from './bottom'
import inputForm from './inputform'
import textview from './textview'

export default {
  components: {
    inner,
    top,
    right,
    left,
    bottom,
    inputForm,
    textview
  }
}
</script>

<style>
body {
  text-align: center;
  font-family: 'Sawarabi Mincho', sans-serif;
  margin: 0 auto;
}
#wrap {
  width: auto;
  margin: 0 auto;
}
</style>