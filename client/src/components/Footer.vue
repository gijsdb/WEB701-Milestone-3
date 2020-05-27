<template>
      <div class="row footer">
        <div class="col-md-4">
          <h2>Details</h2>
          <p>
            Created by Gijs de Blauw for WEB701 Assignment 2 at NMIT.
          </p>
        </div>
        <div class="col-md-4">
          <h2>Social links</h2>
          <p>Social media icons go here</p>
        </div>
        <div class="col-md-4">
          <h2>Navigation</h2>
            <router-link class="footer-link nav-link" to="/">Home</router-link>
            <router-link class="footer-link nav-link" to="/farmers">Farmers</router-link>
            <router-link v-if="$store.state.isUserLoggedIn" class="footer-link nav-link"
            to="/market">
            Marketplace
            </router-link>
            <router-link v-if="$store.state.isUserLoggedIn" class="footer-link nav-link"
            to="/account">
            Account
            </router-link>
        </div>
      </div>
</template>

<script>

</script>

<style>
.footer {
  padding: 1em 0 1em 0;
  margin: auto 0;
  width: 100vw;
  color: #fff;
  background-color: #000000;
  overflow-x: hidden !important;
}

.footer h2 {
  font-size: 1.25em;
  font-weight: 600;
}

.footer-link {
  color: #fff !important;
  font-size: 1em;
  padding: auto;
  margin: auto;
  text-align: center;
}
</style>
