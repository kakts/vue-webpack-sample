<template>
  <div id= 'left'>left! {{ info }}</div>
</template>

<script>
import axios from 'axios'
export default {
  data: function() {
    return {
      info: null
    }
  },
  components: {

  },
  mounted: function() {
    axios
      .get('http://localhost:3000/app')
      .then(response => {
        console.log(response)
        
        this.info = response.data});
  }
}
</script>

<style scoped>
#left {
  font-size: 2em;
  background-color: red;
  float: left;
}
</style>
