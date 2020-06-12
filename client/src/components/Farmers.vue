<template>
  <div class="container-fluid">
    <div class="row section1 vertical-align">
     <div class="col-12">
       <h1>Meet the farmers behind some of the best hops in the region</h1>
       <div class="row">
           <div class="col-12">
            <button @click="smoothScroll" class="btn btn-outline-light">Learn more</button>
          </div>
        </div>
     </div>
    </div>

    <div id="scrollpoint" class="row pt-5 pb-5 section2">
      <div class="col">
        <h2>Farms selling on HopsCo</h2>

         <div class="row pt-5" :key="chunk" v-for="chunk in productChunks">
          <div class="col-md-4" :key="farm.farmId" v-for="farm in chunk">
            <div class="card hopCard" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">{{ farm.farmName }}</h5>
                <p class="card-text"> Website: {{farm.farmWebsite}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import _ from 'lodash';
import axios from 'axios';
import Footer from './Footer.vue';

export default {
  data() {
    return {
      farms: [],
    };
  },
  components: {
    Footer,
  },
  computed: {
    productChunks() {
      return _.chunk(Object.values(this.farms), 3);
    },
  },
  methods: {
    smoothScroll() {
      document.getElementById('scrollpoint').scrollIntoView({ behavior: 'smooth' });
    },
  },
  /* eslint-disable */
  created: function () {
    axios
      .get('http://localhost:8091/api/retrievefarms')
      /* eslint-disable */
      .then(res => {
        this.farms = res.data;
      });
  },
};
</script>

<style scoped>
.section1 {
  height: 90vh;
  width: 100vw;
  color: #fff;
  background-image: url("../assets/img/farmersbg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.section2 {
  width: 100vw;
  background-color: #fff;
}

.farmer-module {
  background-color: green;
}
</style>
