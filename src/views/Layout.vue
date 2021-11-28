<template>
  <AppTopNav />
  <AppHeader />
  <main class="app-body"></main>

  <AppFooder />
</template>
<script setup lang="ts">
import AppTopNav from "@/components/AppTopNav.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooder from "@/components/AppFooder.vue";
import { useStore } from "@/store";
const store = useStore();
store.dispatch("category/getList");
</script>
<style lang="less" scoped>
.app-body {
  min-height: 600px;
}
</style>
