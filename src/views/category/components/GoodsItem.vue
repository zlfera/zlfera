<template>
  <RouterLink :to="`/product/${item.id}`" class="goods-item">
    <img :src="item.picture" />
    <p class="name ellipsis">{{ item.name }}</p>
    <p class="desc ellipsis">{{ item.desc }}</p>
    <p class="price">&yen;{{ item.price }}</p>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  item: {
    id: string;
    picture: string;
    name: string;
    price: string;
    desc: string;
  };
}>();
</script>

<style scoped lang="less">
.goods-item {
  display: block;
  width: 220px;
  padding: 20px 30px;
  text-align: center;
  .hoverShadow();
  img {
    width: 160px;
    height: 160px;
  }
  p {
    padding-top: 10px;
  }
  .name {
    font-size: 16px;
  }
  .desc {
    color: #999;
    height: 29px;
  }
  .price {
    color: @priceColor;
    font-size: 20px;
  }
}
</style>
