<template>
  <div class="sub-category">
    <div class="container">
      <SubBread />
      <SubFilter />
      <div class="goods-list">
        <SubSort />
        <ul>
          <li v-for="i in 20" :key="i">
            <GoodsItem :item="{ id: '', picture: '', price: '', name: '', desc: '' }" />
          </li>
        </ul>
        <XtxInfiniteLoading :loading="load.loading" :finished="load.finished" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SubBread from "./components/SubBread.vue";
import SubFilter from "./components/SubFilter.vue";
import SubSort from "./components/SubSort.vue";
import GoodsItem from "./components/GoodsItem.vue";
import { reactive } from "vue";
import { findSubCategoryGoods } from "@/api/category";
const load = reactive({
  loading: false,
  finished: false,
});
findSubCategoryGoods();
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
