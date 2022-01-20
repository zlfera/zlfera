<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <HomeBanner />
        <HomeNew title subTitle />
        <HomeHot />
        <HomeBrand />
        <HomeProduct />
        <HomeSpecial title subTitle />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import HomeCategory from "./components/HomeCategory.vue";
import HomeBanner from "./components/home-banner.vue";
import HomeNew from "./components/HomeNew.vue";
import HomeHot from "./components/home-hot.vue";
import HomeBrand from "./components/home-brand.vue";

import HomeProduct from "./components/home-product.vue";
import HomeSpecial from "./components/home-special.vue";
</script>
<style scoped lang="less"></style>
