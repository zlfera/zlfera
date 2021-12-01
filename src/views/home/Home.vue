<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
      </div>
      <XtxSkeleton />
    </div>
  </div>
</template>
<script setup lang="ts">
import HomeCategory from "./components/HomeCategory.vue";
import XtxSkeleton from "../../components/librarys/xtx-skeleton.vue";
</script>
<style scoped lang="less"></style>
