<template>
  <div class="container-fluid">

    <div class="row section1 vertical-align">
      <div class="col-12">
        <h1>Account settings</h1><br>
        <div class="row">
           <div class="col-12">
            <p>Manage your account here</p><br>
            <p>You are logged in as {{$store.state.user.accountType}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row section2 vertical-align">
      <div class="col-md-6">
        <EditDetails/>
      </div>
      <div class="col-md-6">
        <Orders v-if="isBuyerType"/>
        <FarmDetails v-if="!isBuyerType"/>
      </div>
    </div>

    <div v-if="!isBuyerType" class="row section3 vertical-align">
      <div class="col-12">
        <ProductsForSale/>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Footer from '../Footer.vue';
import EditDetails from './EditDetails.vue';
import Orders from './Orders.vue';
import FarmDetails from './FarmDetails.vue';
import ProductsForSale from './ProductsForSale.vue';

export default {
  components: {
    EditDetails,
    Orders,
    FarmDetails,
    ProductsForSale,
    Footer,
  },
  computed: {
    /* eslint-disable */
    isBuyerType: function () {
      const accType = this.$store.state.user.accountType;
      if (accType === 'Buyer') {
        return true;
      }
      return false;
    },
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
  width: 100vw;
  color: #42B983;
  background-color: #fff;
}

.section3 { 
  padding: 1em 0;
  color: #42B983;
  background-color: lightgrey;
}
</style>
