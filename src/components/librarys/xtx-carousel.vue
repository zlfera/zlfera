<template>
  <div class="xtx-carousel" @mouseenter="stop()" @mouseleave="start()">
    <ul class="carousel-body">
      <li
        class="carousel-item"
        v-for="(item, i) in sliders"
        :key="i"
        :class="{ fade: index === i }"
      >
        <RouterLink to="/">
          <img :src="item['imgUrl']" />
        </RouterLink>
      </li>
    </ul>
    <a href="javascript:;" class="carousel-btn prev" @click="toggle(-1)">
      <i class="iconfont icon-angle-left"></i>
    </a>
    <a href="javascript:;" class="carousel-btn next" @click="toggle(1)">
      <i class="iconfont icon-angle-right"></i>
    </a>
    <div class="carousel-indicator">
      <span
        v-for="item in props.sliders"
        :key="item.id"
        :class="{ active: index === item.id }"
        @click="index = item.id"
      ></span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref, watch } from "vue";
const props = withDefaults(
  defineProps<{
    sliders: { id: number; imgUrl: string }[];
    duration: number;
    autoPlay: boolean;
  }>(),
  { sliders: () => [], duration: 3000, autoPlay: false }
);

const index = ref(0);
let timer: number;
const autoPlayFn = () => {
  clearInterval(timer);
  timer = setInterval(() => {
    index.value++;
    if (index.value >= props.sliders.length) {
      index.value = 0;
    }
  }, props.duration);
};

watch(
  () => props.sliders,
  (newValue, oldValue) => {
    if (newValue.length && props.autoPlay) {
      index.value = 0;
      autoPlayFn();
    }

  },

  { immediate: true }
);
const stop = () => {
  if (timer) {
    clearInterval(timer);
  }
};
const start = () => {
  if (props.sliders.length && props.autoPlay) {
    autoPlayFn();
  }
};
const toggle = (step: number) => {
  const newIndex = index.value + step;
  if (newIndex >= props.sliders.length) {
    index.value = 0;
    return;
  }
  if (newIndex < 0) {
    index.value = props.sliders.length - 1;
    return;
  }
  index.value = newIndex;
};
onUnmounted(() => {
  clearInterval(timer);
});
</script>
<style scoped lang="less">
.xtx-carousel {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background: #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      &.prev {
        left: 20px;
      }
      &.next {
        right: 20px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>
