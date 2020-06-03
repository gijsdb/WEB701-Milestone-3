<template>
  <div class="container-fluid">

    <div class="row section1 vertical-align">
      <div class="col-12">
        <h1>Welcome to the Marketplace</h1><br>
        <div class="row">
           <div class="col-12">
            <button @click="smoothScroll" class="btn btn-outline-light">Shop now</button>
          </div>
        </div>
      </div>
    </div>

    <div id="scrollpoint" class="row pt-5 section2">
      <div class="col-12">
        <h2>Hops for sale</h2>

        <div class="row" :key="chunk" v-for="chunk in productChunks">
          <div class="col-md-4" :key="hop.id" v-for="hop in chunk">
            <div class="card hopCard" style="width: 18rem;">
              <img src="../../assets/img/isolatedHop.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{ hop.variety }}</h5>
                <p class="card-text"> Bitterness: {{hop.bitterness}}</p>
                <p class="card-text"> Sweetness: {{hop.sweetness}}</p>
                <p class="card-text"> Weight: {{hop.weight}}</p>
                <p class="card-text"> Price: {{hop.price}}</p>
                <p class="card-text"> Added by: {{hop.userId}}</p>
              </div>
              <router-link class="btn btn-success" :to="{
                name: 'buyhop',
                params: {id: hop.hopId,
                variety: hop.variety }
              }">Buy hop</router-link>
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
import Footer from '../Footer.vue';

export default {
  data() {
    return {
      hops: [],
    };
  },
  components: {
    Footer,
  },
  computed: {
    productChunks() {
      return _.chunk(Object.values(this.hops), 3);
    },
  },
  /* eslint-disable */
  created: function () {
    axios
      .get('http://localhost:8091/retrievehops')
      /* eslint-disable */
      .then(res => {
        this.hops = res.data;
      });
  },
  methods: {
    smoothScroll() {
      document.getElementById('scrollpoint').scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
.section1 {
  height: 90vh;
  width: 100vw;
  color: #fff;
  background-image: url("../../assets/img/mainbg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.section2 {
  width: 100vw;
  background-color: #fff;
  color: #42B983;
  padding: 1em 0 1em 0;
}

.hopCard {
  margin-right: auto;
  margin-left: auto;
  margin-top: 1em;
}
</style>
