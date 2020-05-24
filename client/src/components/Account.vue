<template>
  <div class="container-fluid">

    <div class="row section1 vertical-align">
      <div class="col-12">
        <h1>Account settings</h1><br>
        <div class="row">
           <div class="col-12">
            <p>Manage your account here</p>
          </div>
        </div>
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

</style>
