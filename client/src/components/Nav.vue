<template>
 <nav class="navbar navbar-expand-lg navbar-light">
      <router-link class="navbar-brand" to="/">Hops Co</router-link>
      <button class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav navbar-center">
          <router-link class="nav-item nav-link" to="/">Home</router-link>
          <router-link class="nav-item nav-link" to="/farmers">Farmers</router-link>
          <router-link v-if="$store.state.isUserLoggedIn" class="nav-link hover"
            to="/market">
            Marketplace
          </router-link>
          <router-link v-if="$store.state.isUserLoggedIn" class="nav-link hover"
            to="/account">
            Account
          </router-link>
          <button v-if="!$store.state.isUserLoggedIn" class="btn btn-outline-success my-2 my-sm-0">
            <router-link class="nav-btn" to="/login">Login</router-link>
          </button>
          <button v-if="!$store.state.isUserLoggedIn" class="btn btn-outline-success my-2 my-sm-0">
            <router-link class="nav-btn" to="/register">Register</router-link>
          </button>
          <button @click="logout" v-if="$store.state.isUserLoggedIn"
           class="btn btn-outline-success my-2 my-sm-0">
            Logout
          </button>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  methods: {
    async logout() {
      try {
        this.$store.dispatch('setToken', null);
        this.$store.dispatch('setUser', null);
        this.$router.push('/');
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.btn {
  margin: 1em;
}

.navbar {
  padding: 30px;
  display: inline-block;
}

.navbar-center {
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
}

.nav-link{
  color: #42b983 !important;
  font-size: 1.5em;
  transition: .5s;
}

.nav-link:hover {
  font-size: 1.7em;
  font-weight: 500;
  transition: .5s;
}

.nav-btn {
  color: #42b983 !important;
  transition: .5s;
}

.nav-btn:hover {
  color: #fff !important;
  transition: .5s;
}

.navbar-brand {
  float:left;
  margin: 0;
  padding: 0;
  font-size: 2em !important;
  font-weight: bold;
  color: #42b983 !important;
  transition: .5s;
}

.navbar-brand:hover {
  transition: .5s;
  font-size: 2.2em !important;
}

.navbar-collapse.collapse.in {
  display: block!important;
  padding-bottom: 6em;
}

@media (max-width:992px)  {
  .navbar-collapse.collapse.in {
    display: block!important;
    padding-bottom: 18em;
  }
}
</style>
