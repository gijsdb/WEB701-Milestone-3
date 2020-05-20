<template>
  <div class="container-fluid">

    <div class="row">
      <div class="col section1">
        <h1>Welcome to HopsCo</h1>
        <button>Learn more</button>
      </div>
    </div>

    <div class="row">
      <div class="col section2">
        <h2>We provide the best quality hops from the local area</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 section3">
        <h3>Variety</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione totam illo,
          nesciunt dignissimos ad. Magni dolorum culpa sit doloremque repellendus numquam.
          Voluptas quas laborum nemo esse autem quo tenetur!
        </p>
      </div>
      <div class="col-md-4 section3">
        <h3>Consistency</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione totam illo,
          nesciunt dignissimos ad. Magni dolorum culpa sit doloremque repellendus numquam.
          Voluptas quas laborum nemo esse autem quo tenetur!
        </p>
      </div>
      <div class="col-md-4 section3">
        <h3>Quality</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione totam illo,
          nesciunt dignissimos ad. Magni dolorum culpa sit doloremque repellendus numquam.
          Voluptas quas laborum nemo esse autem quo tenetur!
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col section4">
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

<style>
.section1 {
  height: 85vh;
  width: 100vw;
  background-color: red;
}

.section2 {
  height: 50vh;
  width: 100vw;
  background-color: green;
}

.section3 {
  height: 50vh;
  width: 100vw;
  background-color: yellow;
}

.section4 {
  height: 50vh;
  width: 100vw;
  background-color: orange;
}

</style>
