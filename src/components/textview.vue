<template>
  <div id="textviewbox">
    <h1>{{message}}</h1>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: 'hello'
    }
  }
}
</script>

<style>
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539F;
  text-shadow: 3px 3px 1px black;
  border: solid 3px #6091d3;/*線*/
  border-radius: 10px;
}
#textviewbox {
  width: 100;
  margin: 0 0;
  padding: 0 0;
}
</style>