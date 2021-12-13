<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <HomeBanner />
        <HomeNew />
        <HomeHot />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import HomeCategory from "./components/HomeCategory.vue";
import HomeBanner from "./components/home-banner.vue";
import HomeNew from "./components/HomeNew.vue";
import HomeHot from "./components/home-hot.vue";
</script>
<style scoped lang="less"></style>
