<template>
  <div id='top'>
    <div id='top-head'>
      {{ greeting }} World!
    </div>
    <transition name="fade">
      <div id='top-test' v-show="ok">hello</div>
    </transition>
    <div id='top-one'>
      one
    </div>

    <div id='top-two'>
      two
    </div>

    <div id='top-three'>
      three
    </div>

  </div>
</template>

<script>

export default {
  data: function() {
    return {
      greeting: 'top',
    }
  },
  components: {
  }
}
</script>

<style scoped>
  #top {
    display: block;
    text-align: center;
    position: fixed;
    top: 0;
    height: 50px;
    width: 100%;
    background-color: #31a9ee;
  }
  #top-one {
  display: block; 
    text-align: center;
    float: left;
    width: 30%;
    background-color: red;
  }
  #top-two {
        display: block;
    float: left;
    text-align: center;
    width: 40%;
    background-color: green;
  }
  #top-three {
        display: block;
    text-align: center;
    float: left;
    width: 30%;
    background-color: yellow;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>