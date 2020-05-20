<template>
  <div id="app">
    <Nav/>
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';

export default {
  components: {
    Nav,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-y: hidden !important;
}

.vertical-align {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
</style>
