<template>
  <div id="app">
    <Nav />
    <div class="l-main-container">
      <Message />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/navigation/Nav";
import Message from "@/components/common/Message";

export default {
  components: { Nav, Message },
  mounted() {
    this.$store.dispatch("tryAutoLogin");
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
