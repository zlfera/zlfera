<template>
  <RouterView />
  App {{ profile.account }}
  <button @click="setUser">设置用户信息</button>
</template>
<script setup lang="ts">
import Layout from "@/views/Layout.vue";
import { computed } from "vue";
import store from "./store";

const profile = computed(() => store.state.user.profile);
const setUser = () => {
  store.dispatch("user/setUser");
};



</script>

<style lang="less"></style>
