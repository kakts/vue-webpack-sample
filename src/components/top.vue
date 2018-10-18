<template>
  <div class='top'>{{ greeting }} World!</div>
</template>

<script>

export default {
  data: function() {
    return {
      greeting: 'top'
    }
  },
  components: {
  }
}
</script>

<style scoped>
#top {
  font-size: 2em;
  text-align: center;
  background-color: black
}
</style>