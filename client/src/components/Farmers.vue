<template>
  <div class="container-fluid">
    <div class="row section1 vertical-align">
     <div class="col-12">
       <h1>Meet the farmers behind some of the best hops in the region</h1>
       <div class="row">
           <div class="col-12">
            <button class="btn btn-outline-light">Learn more</button>
          </div>
        </div>
     </div>
    </div>

    <div class="row section2">
      <div class="col-md-4 farmer-module">

      </div>
      <div class="col-md-4">

      </div>
      <div class="col-md-4">

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
  background-image: url("../assets/img/farmersbg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.section2 {
  height: 80vh;
  width: 100vw;
  background-color: yellow;
}

.farmer-module {
  background-color: green;
}
</style>
