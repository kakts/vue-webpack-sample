<template>
  <div id= 'profile'>Profile! <br>
    <p>name: {{name}}</p>
    <p>age: {{age}}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: 'akutsu',
      age: 30
    }
  }
}
</script>
