<template>
  <Navbar />
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import Navbar from "@components/Navbar";
export default {
  components: {
    Navbar,
  },
  setup() {
    onMounted: {
      console.log(localStorage.getItem("tareas"));
    }
  },
};
</script>

<style lang="scss">
#app {
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
