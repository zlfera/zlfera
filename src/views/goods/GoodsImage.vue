<template>
  <div class="goods-image">
    <div
      class="large"
      :style="[{ backgroundImage: `url(${images[currIndex]})` }, largePosition]"
      v-show="show"
    ></div>
    <div class="middle" ref="target">
      <img :src="images[currIndex]" />
      <div class="layer" :style="layerPosition" v-show="show"></div>
    </div>
    <ul class="small">
      <li v-for="(img, i) in images" :key="img" :class="{ active: i === currIndex }">
        <img @mouseenter="currIndex = i" :src="img" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { useMouseInElement } from "@vueuse/core";
import { reactive, ref, watch } from "vue";

defineProps<{ images: string[] }>();
const currIndex = ref<number>(0);
const target = ref(null);
const show = ref(false);

const { elementX, elementY, isOutside } = useMouseInElement(target);
const largePosition = reactive({
  backgroundPositionX: "0",
  backgroundPositionY: "0",
});
const layerPosition = reactive({ left: "0", top: "0" });

watch([elementX, elementY, isOutside], () => {
  show.value = !isOutside.value;
  const position = { x: 0, y: 0 };
  if (elementX.value < 100) position.x = 0;
  else if (elementX.value > 300) position.x = 200;
  else position.x = elementX.value - 100;

  if (elementY.value < 100) position.y = 0;
  else if (elementY.value > 300) position.y = 200;
  else position.y = elementY.value - 100;

  layerPosition.left = position.x + "px";
  layerPosition.top = position.y + "px";
  largePosition.backgroundPositionX = -2 * position.x + "px";
  largePosition.backgroundPositionY = -2 * position.y + "px";
});
</script>
<style scoped lang="less">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;
  z-index: 500;
  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }
  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
    position: relative;
    cursor: move;
    .layer {
      width: 200px;
      height: 200px;
      background: rgba(0, 0, 0, 0.2);
      left: 0;
      top: 0;
      position: absolute;
    }
  }
  .small {
    width: 80px;
    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;
      &:hover,
      &.active {
        border: 2px solid @xtxColor;
      }
    }
  }
}
</style>
