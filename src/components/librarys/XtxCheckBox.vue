<template>
  <div class="xtx-checkbox" @click="checkBox">
    <i v-if="checked" class="iconfont icon-checked"></i>

    <i v-else class="iconfont icon-unchecked"></i>

    <span v-if="slot.default">
      <slot />
    </span>
  </div>
</template>
<script lang="ts" setup>
import { useVModel } from "@vueuse/core";

import { useSlots } from "vue";
const props = withDefaults(defineProps<{ modelValue: boolean }>(), {
  modelValue: false,
});
//const emit = defineEmits<{ (event: "update", checked: boolean): void }>();
const emit = defineEmits(["change", "update:modelValue"]);
const slot = useSlots();
//const checked = ref(false);
//使用useVModel实现v-model
//1.使用props定义属性,接收父组件传递的值
//2.使用useVModel实现v-model包装props属性
//3.在使用checked.value就是父组件数据
//4.在使用checked.value='数据',触发emit('update','数据')就是给父组件传递数据
const checked = useVModel(props, "modelValue", emit);

const checkBox = () => {
  const newValue = !checked.value;
  checked.value = newValue;

  emit("change", newValue);
  //$emit("update:modelValue", checked.value);

  //emit("update:modelValue", checked.value);
};
// watch(
//   () => props.modelValue,
//   () => {
//     checked.value = props.modelValue;
//   },
//   { immediate: true }
// );
</script>
<style lang="less" scoped>
.xtx-checkbox {
  display: inline-block;
  margin-right: 2px;
  .icon-checked {
    color: @xtxColor;
    ~ span {
      color: @xtxColor;
    }
  }
  i {
    position: relative;
    top: 1px;
  }
  span {
    margin-left: 2px;
  }
}
</style>
