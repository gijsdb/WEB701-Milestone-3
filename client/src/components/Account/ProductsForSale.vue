<template>
  <div class="container-fluid">

    <div class="row section1 vertical-align">
      <div class="col-12">
        <h2>Your products for sale</h2>
          <div class="row">
            <div class="col-12">
              <h3>They appear here</h3>
            </div>
          </div>
        <button class="btn btn-outline-success my-2 my-sm-0">
            <router-link class="txt-green" to="/addproduct">Add product</router-link>
        </button>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  components: {
  },
  computed: {
  },
  methods: {
  },
};
</script>

<style scoped>
.section1 {
  margin: 1em 0 1em 0;
  color: #42B983;
}

.txt-green {
  color: #42b983
}

.txt-green:hover {
  color: #fff;
}
</style>
