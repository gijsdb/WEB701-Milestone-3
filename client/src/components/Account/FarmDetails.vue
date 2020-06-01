<template>
  <div class="container-fluid">

    <div class="row section1 vertical-align">
      <div class="col-12 pt-3">
        <h1>Your farm details</h1>
        <p>{{ userFarm.farmName }}</p>
        <p>{{ userFarm.farmWebsite }}</p>
      </div>
      <div class="col-12 pt-3">
        <h2>Change farm details</h2><br>
        <form @submit.prevent>
          <input
            type="text"
            name="farmName"
            v-model="farmName"
            placeholder="Farm name"
            class="mb-3"
          /><br/>
          <input
            type="text"
            name="website"
            v-model="website"
            placeholder="Website"
            class="mb-3"
          />
           <div class="error" v-html="errorMsg"/><br>
          <div class="error" v-html="successMsg"/>
        </form>
        <button class="btn btn-outline-success" @click="addFarm">Add farm details</button>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import farmService from '../../services/farmService';

export default {
  data() {
    return {
      userFarm: [],
      farmName: this.farmName,
      website: this.website,
      userId: this.$store.state.user.email,
      errorMsg: null,
      successMsg: null,
    };
  },
  components: {
  },
  computed: {
  },
  /* eslint-disable */
  async created() {
    axios
      .get('http://localhost:8091/getfarmersfarm/' + this.$store.state.user.email)
      /* eslint-disable */
      .then(res => {
        this.userFarm = res.data;
      });
  },
  methods: {
    async addFarm() {
      try {
        await farmService.addfarm({
          farmName: this.farmName,
          farmWebsite: this.website,
          userId: this.userId,
        });
        this.errorMsg = null;
        this.successMsg = 'Farm details updated';
      } catch (error) {
        this.errorMsg = error.name;
      }
    },
  },
};
</script>

<style scoped>

</style>
