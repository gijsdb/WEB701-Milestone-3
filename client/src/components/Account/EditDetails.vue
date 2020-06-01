<template>
  <div class="container-fluid">

    <div class="row section1 vertical-align">
      <div class="col-12 pt-3">
        <h1>Change account details</h1><br>
        <form @submit.prevent>
          <input
            type="text"
            name="email"
            v-model="newEmail"
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
        <div class="error" v-html="errorMessage"/><br>
        <div class="error" v-html="successMessage"/><br>
        </form>
        <button class="btn btn-outline-success" @click="updateAccount">Update</button>
        <button class="btn btn-outline-danger" @click="deleteAccount">Delete account</button>
      </div>
    </div>

  </div>
</template>

<script>
import authService from '../../services/authService';

export default {
  data() {
    return {
      oldEmail: this.$store.state.user.email,
      newEmail: '',
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
          oldEmail: this.oldEmail,
          newEmail: this.newEmail,
          password: this.password,
        });
        this.successMessage = 'Account details updated, please log in again';
        if (this.$router.path !== '/login') {
          this.$router.push('/login');
        }
      } catch (error) {
        this.errorMessage = error.response.data.error;
      }
    },
  },
  async deleteAccount() {
    console.log('yet to be implemented');
  },
};
</script>

<style scoped>

</style>
