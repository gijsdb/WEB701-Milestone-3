<template>
  <div class="container-fluid">

    <div class="row section1 vertical-align">
      <div class="col-12">
        <h1>Welcome to the Marketplace</h1><br>
        <div class="row">
           <div class="col-12">
            <button class="btn btn-outline-light">Shop now</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row section2 vertical-align">
      <div class="col-12">
        <h1>Database results</h1><br>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Footer from '../Footer.vue';

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
  background-image: url("../../assets/img/mainbg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.section2 {
  height: 90vh;
  width: 100vw;
  background-color: #fff;
  color: #42B983;
}
</style>
