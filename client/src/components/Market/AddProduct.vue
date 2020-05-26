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
                    v-on:input="calculatePrice"
                    v-model="weight"
                    name="amount"
                    min="1"
                    max="100"
                    placeholder="weight"><br/>
                    <label>Bitterness</label><br/>
                    <input
                      type="number"
                      v-on:input="calculatePrice"
                      v-model="bitterness"
                      name="bitterness"
                      placeholder="bitterness"
                      value="1"
                      min="1"
                      max="10"><br/>
                    <label>Sweetness</label><br/>
                    <input
                      type="number"
                      v-on:input="calculatePrice"
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
            <div class="error" v-html="error"/><br>
        </form>
        <button class="btn btn-outline-success" @click="addProduct">Add product</button>
    </div>
    </div>
</div>
</template>

<script>
export default {
  components: {
  },
  computed: {
  },
  methods: {
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
