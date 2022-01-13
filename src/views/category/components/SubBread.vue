<template>
  <XtxBread>
    <XtxBreadItem to="/">首页</XtxBreadItem>
    <XtxBreadItem :to="`/category/${category.top.id}`">{{
      category.top.name
    }}</XtxBreadItem>
    <Transition name="fade-right" mode="out-in">
      <XtxBreadItem :key="category.sub.id">
        {{ category.sub.name }}
      </XtxBreadItem>
    </Transition>
  </XtxBread>
</template>
<script lang="ts" setup>
import XtxBreadItem from "../../../components/librarys/XtxBreadItem.vue";
import { useStore } from "@/store";
import { computed } from "vue";

import { useRoute } from "vue-router";

const route = useRoute();
const store = useStore();

const category = computed(() => {
  const cate = {} as {
    top: { id: string; name: string };
    sub: { id: string; name: string };
  };
  store.state.category.list.forEach((item) => {
    item.children &&
      item.children.forEach((sub) => {
        if (sub.id === route.params.id) {
          cate.sub = { id: sub.id, name: sub.name };
          cate.top = { id: item.id, name: item.name };
        }
      });
  });
  return cate;
});
</script>
<style lang="less" scoped>
.fade-right-enter-from,
.fade-right-leave-to {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}
.fade-right-enter-active,
.fade-right-leave-active {
  transition: all 0.5s;
}
.fade-right-enter-to,
.fade-right-leave-from {
  opacity: 1;
  transform: none;
}
</style>
