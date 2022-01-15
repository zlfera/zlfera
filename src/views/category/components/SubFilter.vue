<template>
  <!-- 筛选区 -->
  <div class="sub-filter" v-if="filter">
    <div class="item">
      <div class="head">品牌：</div>
      <div class="body">
        <a
          :class="{ active: item.id === null }"
          href="javascript:;"
          v-for="item in filter.brands"
          :key="item.id"
          >{{ item.name }}</a
        >
      </div>
    </div>

    <div class="item" v-for="item in filter.saleProperties" :key="item.id">
      <div class="head">{{ item.name }}</div>
      <div class="body">
        <a
          :class="{ active: prop.id === null }"
          href="javascript:;"
          v-for="prop in item.properties"
          :key="prop.id as string"
        >
          {{ prop.name }}
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { findSubCategoryFilter } from "@/api/category";
import { Result } from "@/api/types";
import { Ref, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const filter = (ref<{ brands: { id: string; name: string }[] }>({
  brands: [],
}) as unknown) as Ref<Result>;
const filterLoading = ref(false);
watch(
  () => route.params.id,
  (newValue, oldValue) => {
    if (newValue && route.path === "/category/sub/" + newValue) {
      filterLoading.value = true;
      newValue && findSubCategoryFilter(route.params.id as string, filter, filterLoading);
    }
  },
  { immediate: true }
);
</script>
<style scoped lang="less">
// 筛选区
.sub-filter {
  background: #fff;
  padding: 25px;
  .item {
    display: flex;
    line-height: 40px;
    .head {
      width: 80px;
      color: #999;
    }
    .body {
      flex: 1;
      a {
        margin-right: 36px;
        transition: all 0.3s;
        display: inline-block;
        &.active,
        &:hover {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>
