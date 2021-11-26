<template>
  <div id="nav">
    <p>{{ profile.mobile }}</p>
    <p>{{ id }}</p>
    <input type="text" v-model="payload" @keydown="changeName" />
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>
<script setup lang="ts">
import { ref } from "vue";
import { userStore } from "./store";
const payload = ref<number>();
const store = userStore();
const profile = store.state.user.profile;
const id = store.state.cart.list[0].id;
// let mobile = computed(() => {
//   return store.state.user.profile.mobile;
// });
const changeName = () => {
  store.dispatch("user/setUser", payload.value);
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
