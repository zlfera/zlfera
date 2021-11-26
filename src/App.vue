<template>
  <div id="nav">
    <p>{{ profile.mobile }}</p>
    <p>{{ id }}</p>
    <p>{{ categoryId }}</p>

    <button @click="setUser">zlfera</button>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>
<script setup lang="ts">
import store from "./store";
const profile = store.state.user.profile;
const id = store.state.cart.list[0].id;
const categoryId = store.state.category.list[0].id;

const setUser = () => {
  store.dispatch("user/setUser", { account: "123" });
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
