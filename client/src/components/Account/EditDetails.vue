<template>
  <div class="container-fluid">

    <div class="row section1 vertical-align">
      <div class="col-12 pt-3">
        <h1>Change account details</h1><br>
        <form @submit.prevent>
          <input
            type="text"
            name="email"
            v-model="email"
            placeholder="email"
            class="mb-3"
          /><br/>
          <input
            type="password"
            name="password"
            v-model="password"
            placeholder="Password"
            class="mb-3"
          />
        </form>
        <button class="btn btn-outline-success" @click="updateAccount">Update</button>
        <button class="btn btn-outline-danger" @click="deleteAccount">Delete account</button>
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

</style>
