<template>
    <HomePanel title="热门品牌" sub-title="国际经典 品质保证">
        <template v-slot:right>
            <a
                @click="toggle(-1)"
                href="javascript:;"
                class="iconfont icon-angle-left prev"
                :class="{ disabled: index == 0 }"
            ></a>
            <a
                @click="toggle(1)"
                href="javascript:;"
                class="iconfont icon-angle-right next"
                :class="{ disabled: index == 1 }"
            ></a>
        </template>
        <div class="box" ref="target">
            <ul class="list" :style="{ transform: `translateX(${-index * 1240}px)` }">
                <li v-for="item in goods" :key="item.id">
                    <RouterLink to="/">
                        <img :src="item.picture" :alt="item.name" />
                    </RouterLink>
                </li>
            </ul>
        </div>
    </HomePanel>
</template>

<script lang="ts"  setup>
import { findBrands } from '@/api/home';
import { useLazyData } from '@/utils/hooks';
import { ref } from 'vue';
import HomePanel from './HomePanel.vue';
const goods = ref<{ id: string, picture: string, name: string }[]>([])
const target = useLazyData(() => findBrands(10, goods))
const index = ref<number>(0)
const toggle: Function = (step: number) => {
    const newIndex: number = index.value + step
    if (newIndex < 0 || newIndex > 1) return
    index.value = newIndex
}
</script>

<style scoped lang='less'>
.home-panel {
    background: #f5f5f5;
}
.iconfont {
    width: 20px;
    height: 20px;
    background: #ccc;
    color: #fff;
    display: inline-block;
    text-align: center;
    margin-left: 5px;
    background: @xtxColor;
    &::before {
        font-size: 12px;
        position: relative;
        top: -2px;
    }
    &.disabled {
        background: #ccc;
        cursor: not-allowed;
    }
}
.box {
    display: flex;
    width: 100%;
    height: 345px;
    overflow: hidden;
    padding-bottom: 40px;
    .list {
        width: 200%;
        display: flex;
        transition: all 1s;
        li {
            margin-right: 10px;
            width: 240px;
            &:nth-child(5n) {
                margin-right: 0;
            }
            img {
                width: 240px;
                height: 305px;
            }
        }
    }
}
</style>