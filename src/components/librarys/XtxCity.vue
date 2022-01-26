<template>
  <div class="xtx-city" ref="target" @mouseleave="toggle">
    <div class="select" @click="toggle" @mouseenter="toggle" :class="{ active }">
      <span class="placeholder">请选择配送地址</span>
      <span class="value"></span>
      <i class="iconfont icon-angle-down"></i>
    </div>
    <div class="option" v-if="visible">
      <div v-if="loading" class="loading"></div>
      <template v-else>
        <span class="ellipsis" v-for="i in currList" :key="i.code">{{ i.name }}</span>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onClickOutside } from "@vueuse/core";
import axios from "axios";
import { computed, Ref, ref } from "vue";
export interface Data {
  code: string;
  level: number;
  name: string;
  areaList?: Data[];
}
const cityData: Ref<Data> = ref((null as unknown) as Data);
const active = ref(false);
const target = ref(null);
const loading = ref(false);
const visible = ref(false);
onClickOutside(target, () => {
  closeDialog();
});
const openDialog = () => {
  visible.value = true;
  active.value = true;
  getCityData().then((data: Data) => {
    cityData.value = data;
    loading.value = false;
  });
};
const closeDialog = () => {
  active.value = false;
  visible.value = false;
};
const toggle = () => {
  if (active.value) {
    closeDialog();
  } else {
    openDialog();
  }
};
const currList = computed(() => {
  const currList = cityData.value;
  // TODO 根据点击的省份城市获取对应的列表
  return currList;
});
const getCityData = () => {
  return new Promise((resolve, reject) => {
    if (window.cityData) {
      resolve(window.cityData);
    } else {
      const url =
        "https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json";
      axios.get(url).then((res) => {
        window.cityData = res.data;
        resolve(window.cityData);
      });
    }
  });
};

// const cityData = ref<[]>([]);
// computed(() => {
//   getCityData(cityData);
// });
// const getCityData = async (cityData: Ref<[]>) => {
//   const res = await axios.get(
//     "https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json"
//   );
//   cityData.value = res.data;
//   loading.value = false;
// };
</script>
<style scoped lang="less">
.xtx-city {
  display: inline-block;
  position: relative;
  z-index: 400;
  .select {
    border: 1px solid #e4e4e4;
    height: 30px;
    padding: 0 5px;
    line-height: 28px;
    cursor: pointer;
    &.active {
      background: #fff;
    }
    .placeholder {
      color: #999;
    }
    .value {
      color: #666;
      font-size: 12px;
    }
    i {
      font-size: 12px;
      margin-left: 5px;
    }
  }
  .option {
    width: 542px;
    border: 1px solid #e4e4e4;
    position: absolute;
    left: 0;
    top: 29px;
    background: #fff;
    min-height: 30px;
    line-height: 30px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    > span {
      width: 130px;
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
      padding: 0 3px;
      &:hover {
        background: #f5f5f5;
      }
    }
  }
}
</style>
