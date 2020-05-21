<template>
  <div class="container-fluid">

    <div class="row section1 vertical-align">
      <div class="col-12">
        <h1>Welcome to HopsCo</h1><br>
        <div class="row">
           <div class="col-12">
            <button class="btn btn-outline-light">Learn more</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row section2 pt-5 pb-5">
      <div class="col-12">
        <h2>We provide the best quality hops from the local area</h2>
      </div>
      <div class="col-12">
        <img src="../assets/img/isolatedHop.png" class="isolatedhop pt-3"/>
      </div>
    </div>

    <div class="row section3 vertical-align">
      <div class="col-md-4">
        <h3>Variety</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione totam illo,
          nesciunt dignissimos ad. Magni dolorum culpa sit doloremque repellendus numquam.
          Voluptas quas laborum nemo esse autem quo tenetur!
        </p>
      </div>
      <div class="col-md-4">
        <h3>Consistency</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione totam illo,
          nesciunt dignissimos ad. Magni dolorum culpa sit doloremque repellendus numquam.
          Voluptas quas laborum nemo esse autem quo tenetur!
        </p>
      </div>
      <div class="col-md-4">
        <h3>Quality</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione totam illo,
          nesciunt dignissimos ad. Magni dolorum culpa sit doloremque repellendus numquam.
          Voluptas quas laborum nemo esse autem quo tenetur!
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
