<template>
  <div class="home-category" @mouseleave="categoryId = ''">
    <ul class="menu">
      <li
        v-for="item in menuList"
        :key="item.id"
        @mouseenter="categoryId = item.id"
        :class="{ active: categoryId === item.id }"
      >
        <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>

        <template v-if="item.children">
          <RouterLink
            v-for="sub in item.children"
            :key="sub.id"
            :to="`/category/sub/${sub.id}`"
            >{{ sub.name }}</RouterLink
          >
        </template>
        <template v-else>
          <XtxSkeleton
            width="60px"
            height="18px"
            style="margin-right: 5px"
            bg="rgba(255,255,255,0.2)"
          />
          <XtxSkeleton width="50px" height="18px" bg="rgba(255,255,255,0.2)" />
        </template>
      </li>
    </ul>
    <!-- 弹层 -->
    <div class="layer">
      <h4 v-if="currentCategory">
        {{ currentCategory.id === "brand" ? "品牌" : "分类" }}推荐
        <small>根据您的购买或浏览记录推荐</small>
      </h4>
      <ul v-if="currentCategory && currentCategory.goods && currentCategory.goods.length">
        <li v-for="item in currentCategory.goods" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" />

            <div class="info">
              <p class="name ellipsis-2">{{ item.name }}</p>
              <p class="desc ellipsis">{{ item.desc }}</p>
              <p class="price">
                <i>¥</i>
                {{ item.price }}
              </p>
            </div>
          </RouterLink>
        </li>
      </ul>
      <ul
        v-if="currentCategory && currentCategory.brands && currentCategory.brands.length"
      >
        <li
          class="brand"
          v-for="item in currentCategory.brands as Array<{ id: string, picture: string, place: string, name: string, desc: string }>"
          :key="item.id"
        >
          <RouterLink to="/">
            <img :src="item.picture" />
            <div class="info">
              <p class="place">
                <i class="iconfont icon-dingwei"></i>
                {{ item.place }}
              </p>
              <p class="name ellipsis">{{ item.name }}</p>
              <p class="desc ellipsis-2">{{ item.desc }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { findBrand } from "@/api/home";
import { useStore } from "@/store";
import { CategoryList } from "@/store/modules/category/types";
import { computed, reactive, ref } from "vue";

const brand = reactive({
  id: "brand",
  name: "品牌",
  children: [
    {
      id: "brand-children",
      name: "品牌推荐",
    },
  ],
  brands: [],
});

findBrand(6).then((data) => {
  brand.brands = ((data as unknown) as { result: [] }).result;
});
const store = useStore();
const menuList = computed(() => {
  const list = store.state.category.list.map((item) => {
    return {
      id: item.id,
      name: item.name,
      children: item.children && item.children.slice(0, 2),
      goods: item.goods,
    };
  }) as CategoryList[];
  list.push(brand as CategoryList);
  return list;
});
const categoryId = ref("");
const currentCategory = (computed(() => {
  return menuList.value.find((item) => {
    return item.id === categoryId.value;
  });
}) as unknown) as CategoryList;
</script>

<style scoped lang="less">
.layer {
  width: 990px;
  height: 500px;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  left: 250px;
  top: 0;
  display: none;
  padding: 0 15px;
  h4 {
    font-size: 20px;
    font-weight: normal;
    line-height: 80px;
    small {
      font-size: 16px;
      color: #666;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 310px;
      height: 120px;
      margin-right: 15px;
      margin-bottom: 15px;
      border: 1px solid #eee;
      border-radius: 4px;
      background: #fff;
      &:nth-child(3n) {
        margin-right: 0;
      }
      a {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        padding: 10px;
        &:hover {
          background: #e3f9f4;
        }
        img {
          width: 95px;
          height: 95px;
        }
        .info {
          padding-left: 10px;
          line-height: 24px;
          width: 190px;
          .name {
            font-size: 16px;
            color: #666;
          }
          .desc {
            color: #999;
          }
          .price {
            font-size: 22px;
            color: @priceColor;
            i {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}

.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
  .menu {
    li {
      padding-left: 40px;
      height: 50px;
      line-height: 50px;
      &:hover,
      &.active {
        background: @xtxColor;
      }
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 16px;
        }
      }
    }
  }
  &:hover {
    .layer {
      display: block;
    }
  }
}
</style>
