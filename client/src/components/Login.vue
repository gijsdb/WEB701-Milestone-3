<template>
  <div class="container-fluid">
    <div class="row section1 vertical-align">
        <div class="col">
          <div class="row">
            <div class="col-12 pb-3">
              <h1>Welcome back, login below</h1>
            </div>
          </div>
            <form class="pb-5">
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
                <div class="error" v-html="error"/><br>
                <button class="btn btn-outline-success" @click="login">Login</button>
            </form>
        </div>
    </div>
    <Footer class="sticky-bottom"/>
  </div>
</template>

<script>
import Footer from './Footer.vue';

export default {
  components: {
    Footer,
  },
  computed: {
  },
  methods: {
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
