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
        <div class="error" v-html="errorMessage"/><br>
        <div class="error" v-html="successMessage"/><br>
      </div>
    </div>

  </div>
</template>

<script>
import authService from '../../services/authService';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: null,
      successMessage: null,
    };
  },
  components: {
  },
  computed: {
  },
  methods: {
    async updateAccount() {
      try {
        await authService.updateaccount({
          email: this.email,
          password: this.password,
        });
        console.log('success');
      } catch (error) {
        this.errorMessage = error.response.data.error;
      }
    },
  },
};
</script>

<style scoped>

</style>
