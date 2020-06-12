<template>
  <div class="container-fluid">

    <div class="row section1 pb-5 vertical-align">
      <div class="col-12">
        <h1>Account settings</h1><br>
        <div class="row">
           <div class="col-12">
            <button @click="smoothScroll" class="btn btn-outline-light">Manage account</button>
            <p>You are logged in as {{$store.state.user.accountType}}</p>
          </div>
        </div>
      </div>
    </div>

    <div id="scrollpoint" class="row pb-5 section2 vertical-align">
      <div class="col-md-6">
        <EditDetails/>
      </div>
      <div class="col-md-6">
        <Orders v-if="isBuyerType"/>
        <FarmDetails :userFarm="userFarm" v-if="!isBuyerType"/>
      </div>
    </div>

    <div v-if="!isBuyerType" class="row section3 vertical-align">
      <div class="col-12 pt-3">
        <ProductsForSale/>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import axios from 'axios';
import Footer from '../Footer.vue';
import EditDetails from './EditDetails.vue';
import Orders from './Orders.vue';
import FarmDetails from './FarmDetails.vue';
import ProductsForSale from './ProductsForSale.vue';

export default {
  data() {
    return {
      userFarm: [],
    };
  },
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
    smoothScroll() {
      document.getElementById('scrollpoint').scrollIntoView({ behavior: 'smooth' });
    },
  },
  async created() {
    axios
      .get('http://localhost:8091/api/getfarmersfarm/' + this.$store.state.user.email)
      /* eslint-disable */
      .then(res => {
        this.userFarm = res.data;
      });
      if(this.userFarm.length == 0) {
        this.userFarm.push("Not set", "Not set")
      }
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
  border-top: solid 0.5px lightgrey;
  color: #42B983;
}
</style>
