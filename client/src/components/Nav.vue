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
        </div>
      </div>
      <button class="btn btn-outline-success my-2 my-sm-0">
        <router-link to="/login">Login</router-link>
      </button>
      <button class="btn btn-outline-success my-2 my-sm-0">
        <router-link to="/register">Register</router-link>
      </button>
    </nav>
</template>

<script>
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
}

.navbar-brand {
  float:left;
  margin: 0;
  padding: 0;
  font-size: 2em !important;
  font-weight: bold;
  color: #42b983 !important;

}

.navbar-collapse.collapse.in {
  display: block!important;
  padding-bottom: 6em;
}
</style>
