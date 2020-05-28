<template>
  <div class="container-fluid">
        <router-link class="btn btn-success padBottom" to="../market">Back</router-link>
    <div class="row hop-details pt-5">
        <div class="col-md-6">
            <div class="row">
              <div class="col">
                <h2>Variety</h2>
                <p>{{ hop.variety }} </p>
              </div>
            </div>
            <div class= "row">
              <div class="col">
                <h2>Bitterness</h2>
                <p>{{ hop.bitterness }} </p><br>
                <h2>Sweetness</h2>
                <p>{{ hop.sweetness }} </p><br>
              </div>
              <div class="col">
                <h2>Weight</h2>
                <p>{{ hop.weight }} </p><br>
                <h2>Price</h2>
                <p>{{ hop.price }} </p><br>
              </div>
            </div>
        </div>
        <div class="col-md-6">
          <Bidding :bids="bids" :hop="hop"></Bidding>
        </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
import Bidding from './Bidding.vue';

const moment = require('moment');

export default {
  data() {
    return {
      hop: [],
      bids: [],
    };
  },
  components: {
    Bidding,
  },
  methods: {
  },
  /* eslint-disable */
  created: function () {
    axios
      /* eslint-disable */
      .get('http://localhost:8091/retrievehop/' + this.$route.params.id)
      .then(res => {
        this.hop = res.data;
      });
  },
  mounted: function () {
     axios
      .get('http://localhost:8091/retrievebids/' + this.$route.params.id)
        .then(res => {
          this.bids = res.data;
          this.bids.forEach(bid => {
          let dateTime = bid.createdAt;
          let dateOnly = moment(dateTime).calendar();
          bid.createdAt = dateOnly;
      });
      });
  },
};
</script>

<style scoped>
.hop-details {
  color: #42B983
}
</style>
