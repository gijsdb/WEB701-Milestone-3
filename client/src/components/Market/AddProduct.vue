<template>
<div class="container-fluid">

    <div class="row section1 vertical-align">
      <div class="col-12 pt-3">
        <h1>Add product</h1><br>
        <form @submit.prevent autocomplete="off">
            <div class="row">
                <div class="col">
                  <label>Variety</label><br/>
                  <input
                    type="text"
                    v-model="variety"
                    name="variety"
                    placeholder="variety"><br/>
                  <label>Weight (KG)</label><br/>
                  <input
                    type="number"
                    v-model="weight"
                    v-on:input="calculatePrice"
                    name="amount"
                    min="1"
                    max="100"
                    placeholder="weight"><br/>
                    <label>Bitterness</label><br/>
                    <input
                      v-on:input="calculatePrice"
                      type="number"
                      v-model="bitterness"
                      name="bitterness"
                      placeholder="bitterness"
                      value="1"
                      min="1"
                      max="10"><br/>
                    <label>Sweetness</label><br/>
                    <input
                      v-on:input="calculatePrice"
                      type="number"
                      v-model="sweetness"
                      name="sweetness"
                      placeholder="sweetness"
                      value="1"
                      min="1"
                      max="10"><br/>
                </div>
            </div>
                <label>Price (NZD)</label><br>
                <input type="number" v-model="price" name="price" placeholder="0 Dollars"><br>
            <div class="error" v-html="errorMsg"/><br>
            <div class="error" v-html="successMsg"/>
        </form>
        <button class="btn btn-outline-success" @click="addHop">Add product</button>
    </div>
    </div>
</div>
</template>

<script>
import hopService from '../../services/hopService';

export default {
  data() {
    return {
      variety: '',
      weight: '',
      bitterness: '',
      sweetness: '',
      price: '',
      userId: this.$store.state.user.email,
      errorMsg: null,
      successMsg: null,
    };
  },
  components: {
  },
  computed: {
  },
  methods: {
    async addHop() {
      const bitterVal = this.bitterness;
      const sweetVal = this.sweetness;

      if (bitterVal <= 10 && sweetVal <= 10) {
        if (bitterVal >= 1 && sweetVal >= 1) {
          try {
            await hopService.addhop({
              variety: this.variety,
              weight: this.weight,
              bitterness: this.bitterness,
              sweetness: this.sweetness,
              price: this.price,
              userId: this.userId,
            });
            this.error = null;
            this.successMsg = 'Hop added to the market';
          } catch (error) {
            this.errorMsg = 'Check your input and try again';
          }
        } else {
          this.error = 'Please enter values for bitterness and sweetness between 1 and 10';
        }
      } else {
        this.errorMsg = 'Please enter values for bitterness and sweetness between 1 and 10';
      }
    },
    calculatePrice() {
      /* eslint-disable */
      const weight = this.weight;
      let price;
      let multiplier;
      if (weight >= 1 && weight <= 20) {
        multiplier = 3;
        price = weight * multiplier;
        this.price = price.toFixed(2);
      } else if (weight >= 21 && weight <= 40) {
        multiplier = 2.7;
        price = weight * multiplier;
        this.price = price.toFixed(2);
      } else if (weight >= 41 && weight <= 60) {
        multiplier = 2.5;
        price = weight * multiplier;
        this.price = price.toFixed(2);
      } else if (weight >= 61 && weight <= 80) {
        multiplier = 2.3;
        price = weight * multiplier;
        this.price = price.toFixed(2);
      } else if (weight >= 81 && weight <= 100) {
        multiplier = 2.1;
        price = weight * multiplier;
        this.price = price.toFixed(2);
      }
    },
  },
};
</script>

<style scoped>
.section1 {
  margin: 1em 0 1em 0;
  color: #42B983;
}

label {
    padding-top: .5em;
    font-weight: 500;
}

form input {
    width: 30%;
    text-align: center;
}
</style>
