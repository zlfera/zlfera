<template>
  <!-- 筛选区 -->
  <div class="sub-filter" v-if="filter">
    <div class="item">
      <div class="head">品牌：</div>
      <div class="body">
        <a
          :class="{ active: item.id === filter.selectedBrand }"
          @click="changeBrand(item.id)"
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
          :class="{ active: prop.id === item.selectedProp }"
          @click="changeProp(item, prop.id as string)"
          href="javascript:;"
          v-for="prop in item.properties"
          :key="prop.id as string"
          >{{ prop.name }}</a
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { findSubCategoryFilter } from "@/api/category";
import { Result, SaleProperty } from "@/api/types";
import { Ref, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const filter = (ref<{ brands: { id: string; name: string }[] }>({
  brands: [],
}) as unknown) as Ref<Result>;
//const filterLoading = ref(false);
watch(
  () => route.params.id,
  (newValue) => {
    if (newValue && route.path === "/category/sub/" + newValue) {
      // filterLoading.value = true;
      newValue && findSubCategoryFilter(route.params.id as string, filter); //filterLoading
    }
  },
  { immediate: true }
);
const getFilterParams = () => {
  const obj: {
    brandId: string | null;
    attrs: { groupName: string; propertyName: string }[] | null;
  } = { brandId: "", attrs: [] };
  obj.brandId = filter.value.selectedBrand;
  filter.value.saleProperties.forEach((item) => {
    if (item.selectedProp) {
      const prop = item.properties.find((prop) => prop.id === item.selectedProp);
      obj.attrs!.push({ groupName: item.name, propertyName: prop!.name });
    }
  });
  if (obj.attrs?.length === 0) {
    obj.attrs = null;
  }
  return obj;
};
const emit = defineEmits<{ (event: "filterChange", obj: object): void }>();
const changeBrand = (id: string) => {
  if (filter.value.selectedBrand === id) return;
  filter.value.selectedBrand = id;
  emit("filterChange", getFilterParams());
};
const changeProp = (item: SaleProperty, id: string) => {
  if (item.selectedProp === id) return;
  item.selectedProp = id;
  emit("filterChange", getFilterParams());
};
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
