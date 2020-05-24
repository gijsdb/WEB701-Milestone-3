<template>
  <div class="container-fluid">
    <div class="row section1 vertical-align">
        <div class="col">
          <div class="row">
            <div class="col-12 pb-3">
              <h1>Welcome back, login below</h1>
            </div>
          </div>
            <form class="pb-5" @submit.prevent>
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
                  placeholder="password"
                />
                <div class="error" v-html="errorMessage"/><br>
                <div class="success" v-html="successMessage"/><br>
                <button class="btn btn-outline-success" @click="login">Login</button>
            </form>
        </div>
    </div>
    <Footer class="sticky-bottom"/>
  </div>
</template>

<script>
import authService from '../services/authService';
import Footer from './Footer.vue';
/* eslint-disable */

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
    Footer,
  },
  computed: {
  },
  methods: {
    async login() {
      try {
        const response = await authService.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
        console.log(this.$store);
        console.log('success');
        this.$router.push('market');
      } catch (error) {
        this.errorMessage = error.response.data.error;
      }
    },
  },
};
</script>

<style scoped>
.section1 {
  padding: 1em 0 1em 0;
  color: #42B983;
}

.sticky-bottom {
  position: absolute;
  bottom: 0;
}
</style>
