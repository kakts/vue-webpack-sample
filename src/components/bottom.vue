<template>
  <div id= 'bottom'>bottom!</br>

    <div v-for="currency in info" class="currency">
      <p>{{ currency.description }}</p>
      <span class="lighten">
        <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal}}
      </span>
    </div>  
  </div>

</template>

<script>
import axios from 'axios';
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
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response.data.bpi));
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2);
    }
  }
}
</script>

<style scoped>
#bottom {
  font-size: 2em;
  background-color: blue;
  float: left;
}
</style>
