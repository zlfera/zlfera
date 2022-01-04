<template>
  <div class="top-category">
    <div class="container">
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem v-if="topCategory">{{ topCategory.name }}</XtxBreadItem>
      </XtxBread>
      <!-- 轮播图 -->
      <XtxCarousel :sliders="sliders" style="height: 500px;" :autoPlay="true" />
      <!-- 所有二级分类 -->
      <div class="sub-list" v-if="topCategory && topCategory.children">
        <h3>全部分类</h3>
        <ul>
          <li v-for="sub in topCategory.children" :key="sub.id">
            <a href="javascript:;">
              <img :src="sub.picture" />
              <p>{{ sub.name }}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import XtxBread from "@/components/librarys/XtxBread.vue";
import XtxBreadItem from "@/components/librarys/XtxBreadItem.vue";
import { computed, ref } from "vue";
import XtxCarousel from "@/components/librarys/xtx-carousel.vue";
import { findBanner } from "@/api/home";
import { useStore } from "@/store";
import { useRoute } from "vue-router";
import { CategoryList } from "@/store/modules/category/types";
const sliders = ref<[]>([]);
findBanner(sliders)
//从vuex获取分类数据
const store = useStore()
const route = useRoute() as unknown as {
  params: {
    id: string;
  };
};
const topCategory = computed(() => {
  let cate = {} as CategoryList;


  const item = store.state.category.list.find(
    (item: CategoryList) => {
      return item.id === route.params.id
    }
  );
  console.log(item);

  if (item) cate = item
  return cate
});




</script>
<style scoped lang="less">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .sub-list {
    margin-top: 20px;
    background-color: #fff;
    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;
      li {
        width: 168px;
        height: 160px;
        a {
          text-align: center;
          display: block;
          font-size: 16px;
          img {
            width: 100px;
            height: 100px;
          }
          p {
            line-height: 40px;
          }
          &:hover {
            color: @xtxColor;
          }
        }
      }
    }
  }
}
</style>
