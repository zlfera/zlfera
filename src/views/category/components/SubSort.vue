<template>
  <div class="sub-sort">
    <div class="sort">
      <a
        href="javascript:;"
        :class="{ active: sortParams.sortField === '' }"
        @click="changeSort('')"
        >默认排序</a
      >
      <a
        :class="{ active: sortParams.sortField === 'publishTime' }"
        @click="changeSort('publishTime')"
        href="javascript:;"
        >最新商品</a
      >
      <a
        :class="{ active: sortParams.sortField === 'orderNum' }"
        @click="changeSort('orderNum')"
        href="javascript:;"
        >最高人气</a
      >
      <a
        :class="{ active: sortParams.sortField === 'evaluateNum' }"
        @click="changeSort('evaluateNum')"
        href="javascript:;"
        >评论最多</a
      >
      <a href="javascript:;" @click="changeSort('price')">
        价格排序
        <i
          :class="{
            active: sortParams.sortField === 'price' && sortParams.sortMethod === 'asc',
          }"
          class="arrow up"
        />
        <i
          :class="{
            active: sortParams.sortField === 'price' && sortParams.sortMethod === 'desc',
          }"
          class="arrow down"
        />
      </a>
    </div>
    <div class="check">
      <XtxCheckBox v-model:a="isCheckedA">仅显示有货商品</XtxCheckBox>

      <XtxCheckBox v-model:a="isCheckedB">仅显示特惠商品</XtxCheckBox>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
const isCheckedA = ref();
const isCheckedB = ref();
const sortParams = reactive({
  inventory: false,
  onlyDiscount: false,
  sortField: "",
  sortMethod: "",
});
const changeSort = (sortField: string) => {
  if (sortField === "price") {
    sortParams.sortField = sortField;
    if (sortParams.sortMethod === "") {
      sortParams.sortMethod = "desc";
    } else {
      sortParams.sortMethod = sortParams.sortMethod === "desc" ? "asc" : "desc";
    }
  } else {
    if (sortField === sortParams.sortField) return;
    sortParams.sortField = sortField;
    sortParams.sortMethod = "";
  }
};
</script>

<style scoped lang="less">
.sub-sort {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .sort {
    display: flex;
    a {
      height: 30px;
      line-height: 28px;
      border: 1px solid #e4e4e4;
      padding: 0 20px;
      margin-right: 20px;
      color: #999;
      border-radius: 2px;
      position: relative;
      transition: all 0.3s;
      &.active {
        background: @xtxColor;
        border-color: @xtxColor;
        color: #fff;
      }
      .arrow {
        position: absolute;
        border: 5px solid transparent;
        right: 8px;
        &.up {
          top: 3px;
          border-bottom-color: #bbb;
          &.active {
            border-bottom-color: @xtxColor;
          }
        }
        &.down {
          top: 15px;
          border-top-color: #bbb;
          &.active {
            border-top-color: @xtxColor;
          }
        }
      }
    }
  }
  .check {
    .xtx-checkbox {
      margin-left: 20px;
      color: #999;
    }
  }
}
</style>
