<template>
  <div id="inputform">
    <nickname-header></nickname-header>
    <input-text></input-text>
    <input-button></input-button>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {

    }
  }
}

// datastore
let PropertyStore = {
  debug: true,
  state: {
    property: {
      type: '1',
      nickname: ''
    }
  },
  validate() {
    this.debug && console.log('setMessageAction triggered', this.state.property.nickname)
    console.log(this.state.property.nickname.length)

    if (this.state.property.nickname.length <= 3) {
      throw new Error('3moji')
    }
    return true;
  }
}

let NickNameHeader = Vue.extend({
  name: 'nickname_header',
  template: '<div class="nickname">{{ sharedState.state.property.nickname }} </div>',
  data: function() {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})
Vue.component('nickname-header', NickNameHeader);

let inputText = Vue.extend({
  name: 'nickname_input',
  template: '<input class="input" v-model="sharedState.state.property.nickname" placeholder="NICKNAMEを入力">',
  data: function() {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
});
Vue.component('input-text', inputText);

let inputButton = Vue.extend({
  name: 'input-button',
  template: '<button class="button" v-on:click="validate">START</button>',
  data: function() {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  },
  methods: {
    validate: function(event) {
      console.log(this.$el)
      var valid = false
      try {
        valid = this.$data.sharedState.validate()
        if (valid) {
          console.log(this);
          this.$router.push('/todoInput')
        }
      } catch(e) {
        alert(e.message)
      }
    }
  }
})
Vue.component('input-button', inputButton)
</script>

<style scoped>
.scene1{
  font-size: 1.8rem;
  text-align: center;
  a div p{
    display: block;
    margin: 0 auto;
    height:30pt;
  }
}
.input{
  width: 130pt;
  height:30pt;
}
.button {
  display: block;
  position: relative;
  margin: 0 auto;
  width: 70pt;
  border: solid 1px silver;
  border-radius: 0.5rem 0.5rem;
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  text-decoration: none;
}
</style>
