<template>
  <div class="container-fluid">
      <div class="row section1 vertical-align">
        <div class="col">
          <div class="row">
            <div class="col-12 pb-3">
              <h1>Welcome, create an account below</h1>
            </div>
          </div>
            <form class="pb-5" autocomplete="off">
               <input
                  type="text"
                  name="username"
                  v-model="username"
                  placeholder="Username"
                  class="mb-3"
                /><br/>
                <input
                  type="text"
                  name="email"
                  v-model="email"
                  placeholder="E-mail"
                  class="mb-3"
                /><br/>
                <input
                  type="password"
                  name="password"
                  v-model="password"
                  placeholder="Password"
                  class="mb-3"
                /><br/>
                <select v-model="accountType" name="accountType">
                  <option value="Farmer">Farmer</option>
                  <option value="Buyer">Buyer</option>
                </select>
                <div class="error" v-html="errorMessage"/><br>
                 <div class="error" v-html="successMessage"/><br>
                <button class="btn btn-outline-success" @click="register">Register</button>
            </form>
        </div>
      </div>
    <Footer class="sticky-bottom"/>
  </div>
</template>

<script>
import authService from '../services/authService';
import Footer from './Footer.vue';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      accountType: '',
      errorMessage: null,
      successMessage: null,
    };
  },
  components: {
    Footer,
  },
  computed: {
  },
  methods: {
    async register() {
      try {
        const response = await authService.register({
          username: this.username,
          email: this.email,
          password: this.password,
          accountType: this.accountType,
        });
        console.log(response.data.user);
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
        this.errorMessage = null;
        this.successMessage = 'User created';
      } catch (error) {
        console.log(error);
        console.log(error.data);
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style scoped>
.section1 {
  color: #42B983;
  padding: 1em 0 2em 0;
}

.sticky-bottom {
  position: absolute;
  bottom: 0;
}
</style>
