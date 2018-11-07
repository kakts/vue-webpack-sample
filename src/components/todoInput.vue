<template>
  <input type="text" @keyup.enter="addTodoText"/>
</template>

<script>
  export default {
    methods: {
      addTodoText(e) {
        let text = e.target.value;
        this.$store.dispatch('addTodo', {
          text
        });
        e.target.value = '';
      }
    }
  }
</script>