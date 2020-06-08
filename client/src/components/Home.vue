<template>
  <div class="container-fluid">

    <div class="row section1 vertical-align">
      <div class="col-12">
        <h1>Welcome to HopsCo</h1><br>
        <div class="row">
           <div class="col-12">
            <button @click="smoothScroll"
            class="btn btn-outline-light">Learn more</button>
          </div>
        </div>
      </div>
    </div>

    <div id="scrollpoint" class="row section2 pt-5 pb-5">
      <div class="col-12">
        <h2>We provide the best quality hops from the beautiful Tasman region in New Zealand.</h2>
      </div>
      <div class="col-12">
        <img src="../assets/img/isolatedHop.png" class="isolatedhop pt-3"/>
      </div>
    </div>

    <div class="row section3 pt-5 pb-5">
      <div class="col-md-4">
        <h3>Sell Hops</h3>
        <p>
          Sign up as a farmer, register your farm and sell hops to customers from around
          New Zealand. HopsCo features an auction system where you can sell your hops at
          any price you want!
        </p>
      </div>
      <div class="col-md-4">
        <h3>Buy Hops</h3>
        <p>
          Buy fresh, quality Hops from farmers around the Tasman region. Sign up as a
          customer and visit the Marketplace to see some of the great deals available.
        </p>
      </div>
      <div class="col-md-4">
        <h3>Quality Assured</h3>
        <p>
          All hops are to meet HopsCo standards so we quality can be assured to all of
          our customers.
        </p>
      </div>
    </div>

    <div class="row section4 vertical-align">
      <div class="col">
        <h2>The tasman region is prime for growing the best hops</h2>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Footer from './Footer.vue';

export default {
  components: {
    Footer,
  },
  computed: {
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
  background-image: url("../assets/img/mainbg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.section2 {
  width: 100vw;
  color: #42B983;
  background-color: #fff;
}

.isolatedhop {
  width: 15em;
}

.section3 {
  padding: 1em 1em 1em 1em;
  width: 100vw;
  color: #fff;
  background-color: #42B983;
}

p {
  font-size: 1.1em;
}

.section4 {
  height: 50vh;
  width: 100vw;
  color: #fff;
  background-image: url("../assets/img/tasmanbg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
