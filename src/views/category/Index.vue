<template>
  <div class="top-category">
    <div class="container">
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <Transition name="fade-right" mode="out-in">
          <XtxBreadItem v-if="topCategory" :key="topCategory.id">
            {{ topCategory.name }}
          </XtxBreadItem>
        </Transition>
      </XtxBread>
      <!-- 轮播图 -->
      <XtxCarousel :sliders="sliders" style="height: 500px" :autoPlay="true" />
      <!-- 所有二级分类 -->
      <div class="sub-list" v-if="topCategory && topCategory.children">
        <h3>全部分类</h3>
        <ul>
          <li v-for="item in topCategory.children" :key="item.id">
            <a href="javascript:;">
              <img :src="item.picture" />
              <p>{{ item.name }}</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- 分类关联商品 -->
      <div class="ref-goods" v-for="sub in category" :key="sub.id">
        <div class="head">
          <h3>- {{ sub.name }} -</h3>
          <p class="tag">温暖柔软，品质之选</p>
          <XtxMore :path="`/category/sub/${sub.id}`" />
        </div>

        <div class="body">
          <GoodsItem v-for="item in sub.goods" :item="item" :key="item.id" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import XtxBread from "@/components/librarys/XtxBread.vue";
import XtxBreadItem from "@/components/librarys/XtxBreadItem.vue";
import { computed, ref, watch } from "vue";
import XtxCarousel from "@/components/librarys/xtx-carousel.vue";
import { findBanner } from "@/api/home";
import { useStore } from "@/store";
import { useRoute } from "vue-router";
import { CategoryList } from "@/store/modules/category/types";
import GoodsItem from "./components/GoodsItem.vue";
import { findTopCategory } from "@/api/category";

const sliders = ref<[]>([]);
findBanner(sliders);
//从vuex获取分类数据
const store = useStore();

const route = useRoute();
route.params.id;
//获取当前分类
const topCategory = computed(() => {
  let cate = {} as CategoryList;

  //获取当前路由的id,然后在vuex中找到对应的分类数据,然后返回,如果没有找到,返回空对象
  const item = store.state.category.list.find(
    (item: CategoryList) => item.id === route.params.id
  );
  if (item) cate = item;
  return cate;
});
const category = ref<
  {
    id: string;
    name: string;
    picture: string;
    goods: {
      id: string;
      name: string;
      desc: string;
      picture: string;
      price: string;
    }[];
  }[]
>([]);
//findTopCategorys(route.params.id, category);
watch(
  () => route.params.id,
  (newVal) => {
    if (newVal && `/category/${newVal}` === route.path) {
      findTopCategory(route.params.id as string, category);

      //newVal && findTopCategory(route.params.id, category);
    }
  },
  { immediate: true }
);
</script>
<style scoped lang="less">
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
  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;
    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }
      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }
    .body {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding: 0 65px 30px;
    }
  }
}
</style>
