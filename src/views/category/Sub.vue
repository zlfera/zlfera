<template>
  <div class="sub-category">
    <div class="container">
      <SubBread />
      <SubFilter @filterChange="filterChange" />
      <div class="goods-list">
        <SubSort @sortChange="sortChange" />
        <ul>
          <li v-for="goods in goodsList" :key="goods.id">
            <GoodsItem :item="goods" />
          </li>
        </ul>
        <XtxInfiniteLoading
          @infinite="getData"
          :loading="load.loading"
          :finished="load.finished"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SubBread from "./components/SubBread.vue";
import SubFilter from "./components/SubFilter.vue";
import SubSort from "./components/SubSort.vue";
import GoodsItem from "./components/GoodsItem.vue";
import { reactive, ref, watch } from "vue";
import { findSubCategoryGoods } from "@/api/category";

import { useRoute } from "vue-router";
const load = reactive({
  loading: false,
  finished: false,
});
let reqParams = {
  page: 1,
  pageSize: 20,
  categoryId: null,
};
const goodsList = ref<
  { id: string; picture: string; price: string; name: string; desc: string }[]
>([]);
const route = useRoute();

const getData = () => {
  console.log(reqParams);
  load.loading = true;
  ((reqParams.categoryId as unknown) as string) = route.params.id as string;

  findSubCategoryGoods(reqParams).then(({ result }) => {
    if (result.items.length) {
      goodsList.value.push(...result.items);
      reqParams.page++;
    } else {
      load.finished = true;
    }
    load.loading = false;
  });
};
watch(
  () => route.params.id,
  (newValue) => {
    load.finished = false;
    if (newValue && `/category/sub/${newValue}` === route.path) {
      goodsList.value = [];
      reqParams.page = 1;
    }
  }
  // { immediate: true }
);
const sortChange = (sortParams: object) => {
  load.finished = false;
  reqParams = { ...reqParams, ...sortParams };
  goodsList.value = [];
  reqParams.page = 1;
};
const filterChange = (filterParams: object) => {
  load.finished = false;
  reqParams = { ...reqParams, ...filterParams };
  goodsList.value = [];
  reqParams.page = 1;
};
</script>
<style lang="less">
.goods-list {
  background: #fff;
  padding: 0 25px;
  margin-top: 25px;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;
    li {
      margin-right: 20px;
      margin-bottom: 20px;
      &:nth-child(5n) {
        margin-right: 0;
      }
    }
  }
}
</style>
