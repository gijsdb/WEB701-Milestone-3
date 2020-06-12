<template>
  <div class="container-fluid">

    <div class="row section1 vertical-align">
      <div class="col-12">
        <h2 class="pb-3">Your products for sale</h2>
        <button class="btn btn-outline-success my-2 my-sm-0">
            <router-link class="txt-green" to="/addproduct">Add product</router-link>
        </button>
        <div class="row pt-5" :key="chunk" v-for="chunk in productChunks">
          <div class="col-md-4" :key="hop.id" v-for="hop in chunk">
            <div class="card" style="width: 18rem;">
              <img src="../../assets/img/isolatedHop.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{ hop.variety }}</h5>
                <p class="card-text"> Bitterness: {{hop.bitterness}}</p>
                <p class="card-text"> Sweetness: {{hop.sweetness}}</p>
                <p class="card-text"> Weight: {{hop.weight}}</p>
                <p class="card-text"> Price: {{hop.price}}</p>
                <p class="card-text"> Added by: you!</p>
              </div>
              <button class="btn btn-danger">Delete hop</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import _ from 'lodash';
import axios from 'axios';

export default {
  data() {
    return {
      hops: [],
    };
  },
  components: {
  },
  computed: {
    productChunks() {
      return _.chunk(Object.values(this.hops), 3);
    },
  },
  async created() {
    axios
      /* eslint-disable */
      .get('http://localhost:8091/api/getfarmershops/' + this.$store.state.user.email)
      .then(res => {
        this.hops = res.data;
      });
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

.txt-green {
  color: #42b983
}

.txt-green:hover {
  color: #fff;
}

button { 
  transition: .5s;
}

button:hover { 
  color: #fff;
  transition: .5s;
  padding: 1em;
  font-size: 1.1em;
}
</style>
