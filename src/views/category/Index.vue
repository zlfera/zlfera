<template>
  <div class="top-category">
    <div class="container">
      <XtxBread>
        <XtxBreadItem :to="{ path: '/' }">首页</XtxBreadItem>
        <XtxBreadItem to="/category/1005000">电器</XtxBreadItem>
        <XtxBreadItem>空调</XtxBreadItem>
      </XtxBread>
    </div>
  </div>
</template>
<script lang="ts" setup>
import XtxBread from "@/components/librarys/xtx-bread.vue";
import XtxBreadItem from "@/components/librarys/xtx-bread-item.vue";
</script>
<style scope lang="less"></style>
