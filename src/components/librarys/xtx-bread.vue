<!-- <template>
    <div class="xtx-bread">
        <slot />
    </div>
</template> -->
<template>
    <zlf />
</template>
<script setup lang="tsx">
import { useSlots, h } from 'vue';
const items: JSX.Element[] = useSlots().default!()
const zlfera = (
    < i class='iconfont icon-angle-right' />

)
const dynamicItems: JSX.Element[] = []
items.forEach((item: JSX.Element, i: number) => {
    dynamicItems.push(item)
    if (i < items.length - 1) {
        dynamicItems.push(zlfera)
    }
})

const zlf = h('div', {
    class: 'xtx-bread'
}, dynamicItems)

withDefaults(defineProps<{ parentPath: string | object, parentName: string }>(), {
    parentPath: '',
    parentName: '',
})
</script>
<style  lang='less'>
.xtx-bread {
    display: flex;
    padding: 25px 10px;
    &-item {
        a {
            color: #666;
            transition: all 0.4s;
            &:hover {
                color: @xtxColor;
            }
        }

        // &:last-child {
        //     i {
        //         display: none;
        //     }
        // }

        i {
            font-size: 12px;
            margin-left: 5px;
            margin-right: 5px;
            line-height: 22px;
        }
    }
}
</style>