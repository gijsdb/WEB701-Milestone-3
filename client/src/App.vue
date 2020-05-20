<template>
  <div id="app">
    <!--
    <div id="navbar">
      <a class="navbar-brand" href="/">HopsCo</a>
      <router-link to="/">Home</router-link> |
      <router-link to="/farmers">Farmers</router-link>
    </div>
    !-->
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
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
}

.navbar-brand {
  float:left;
  margin: 0;
  padding: 0;
}

.navbar-collapse.collapse.in {
  display: block!important;
  padding-bottom: 5em;
}
</style>
