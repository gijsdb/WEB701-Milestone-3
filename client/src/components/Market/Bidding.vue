<template>
  <div class="container">
    <div class="row">
        <div class="col">
            <h2>Bidding</h2>
        </div>
    </div>
    <div class="row">
      <div class="col">
        <input type="number"
            v-model="bidAmount"
            name="amount"
            placeholder="Bid amount"
            :min="this.hop.price">
        <br>
        <button class="btn btn-warning mt-3" @click="addBid">Place bid</button><br>
      </div>
    </div>
    <div class="row">
        <div class="col">
        <div class="error" v-html="error"/><br>
            <ul id="bid-list">
            <li v-for="bid in this.$props.bids" :key="bid.bidId">
                <p>Bid amount of ${{ bid.bidAmount }} by {{bid.userId}} at {{bid.createdAt}} </p>
            </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import bidService from '../../services/bidService';

export default {
  data() {
    return {
      bidAmount: '',
      userId: '',
      hopId: this.$props.hop.hopId,
      error: null,
      // bids: this.bids,
    };
  },
  /* eslint-disable */
  created: function() {
    // this.formatDate();
  },
  computed: {
  },
  methods: {
    async addBid() {
      if (this.bidAmount < this.hop.price) {
        alert('Your bid amount must be above the set price');
        return;
      }
      try {
        const newBid = await bidService.addbid({
          bidAmount: this.bidAmount,
          userId: this.$store.state.user.email,
          hopId: this.hop.hopId,
        });
        this.$router.go()
      } catch (error) {
        this.error = error;
      }
    },
  },
  props: ['hop', 'bids'],
};
</script>

<style scoped>
</style>
