<template>
  <div class="xtx-city" ref="target" @mouseleave="toggle">
    <div class="select" @click="toggle" @mouseenter="toggle" :class="{ active }">
      <span v-if="!fullLocation" class="placeholder">请选择配送地址</span>
      <span v-else class="value">{{ fullLocation }}</span>
      <i class="iconfont icon-angle-down"></i>
    </div>
    <div class="option" v-if="visible">
      <div v-if="loading" class="loading"></div>
      <template v-else>
        <span
          class="ellipsis"
          @click="changeCity(i)"
          v-for="i in currList"
          :key="i.code"
          >{{ i.name }}</span
        >
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onClickOutside } from "@vueuse/core";
import axios from "axios";
import { computed, reactive, Ref, ref } from "vue";
export interface Data {
  code: string;
  level: number;
  name: string;
  areaList?: Data[];
}
withDefaults(defineProps<{ fullLocation: string }>(), {
  fullLocation: "",
});
let cityData: Ref<Data[]> = ref((null as unknown) as Data[]);
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
  getCityData().then((data: Data[]) => {
    cityData.value = data;
    loading.value = false;
  });
};
const openDialogs = async () => {
  visible.value = true;
  active.value = true;
  const data = await getCityDatas();

  cityData.value = data;

  loading.value = false;
};
const closeDialog = () => {
  active.value = false;
  visible.value = false;
};
const toggle = () => {
  if (active.value) {
    closeDialog();
  } else {
    openDialogs();
  }
};
const currList = computed(() => {
  const currList = cityData.value;
  // TODO 根据点击的省份城市获取对应的列表
  return currList;
});
const windows = (window as unknown) as { cityData: Data[] };
const getCityData = () => {
  return new Promise((resolve: (value: Data[]) => void, reject) => {
    if (windows.cityData) {
      resolve(windows.cityData);
    } else {
      const url =
        "https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json";
      axios.get(url).then((res) => {
        windows.cityData = res.data;
        resolve(windows.cityData);
      });
    }
  });
};

// const cityData = ref<[]>([]);
// computed(() => {
//   getCityData(cityData);
// });
const getCityDatas = async () => {
  if (!windows.cityData) {
    const res = await axios.get(
      "https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json"
    );
    windows.cityData = res.data;
    console.log(res.data);
  }
  return windows.cityData;
};
const addressData = reactive({
  provinceCode: "",
  provinceName: "",
  cityCode: "",
  cityName: "",
  countyCode: "",
  countyName: "",
  fullLocation: "",
});
const emit = defineEmits<{ (event: "changeCites", fullLocation: string): void }>();
const changeCity = (i: Data) => {
  cityData.value = i.areaList!;

  if (i.level === 0) {
    addressData.provinceCode = i.code;

    addressData.provinceName = i.name;
  }
  if (i.level === 1) {
    addressData.cityCode = i.code;
    addressData.cityName = i.name;
  }
  if (i.level === 2) {
    addressData.countyCode = i.code;
    addressData.countyName = i.name;

    addressData.fullLocation =
      addressData.provinceName + addressData.cityName + addressData.countyName;

    closeDialog();
    emit("changeCites", addressData.fullLocation);
  }
};
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
