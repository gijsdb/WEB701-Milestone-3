<template>
  <div class="container-fluid">

    <div class="row section1 vertical-align">
      <div class="col-12 pt-3">
        <h1>Change farm details</h1><br>
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
        </form>
        <button class="btn btn-outline-success" @click="updateFarm">Update</button>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      farmName: this.farmName,
      website: this.website,
      errorMsg: null,
      successMsg: null,
    };
  },
  components: {
  },
  computed: {
  },
  methods: {
    async updateFarm() {
      alert('Not yet implemented');
    },
  },
};
</script>

<style scoped>

</style>
